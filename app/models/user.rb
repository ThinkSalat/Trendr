 # == Schema Information
#
# Table name: users
#
#  id                 :bigint(8)        not null, primary key
#  username           :string           not null
#  email              :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  title              :string
#  description        :string
#  private_posts      :boolean          default(FALSE)
#  private_likes      :boolean          default(TRUE)
#  private_followers  :boolean          default(TRUE)
#  private_followings :boolean          default(TRUE)
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
  validates_presence_of :password_digest
  validates :username, length: { in: 5..30 }
  validates :password, length: { minimum: 6, allow_nil: true }

  after_create :follow_default_users, :ensure_following_self
  after_save :reset_demo_user
  
  before_save :ensure_avatar
  before_validation :downcase_fields
  before_validation :ensure_session_token

  has_one_attached :avatar

  has_many :followed_user_records,
    class_name: :Following,
    foreign_key: :follower_id,
    primary_key: :id

  has_many :follower_records,
    class_name: :Following,
    foreign_key: :followed_id,
    primary_key: :id

  has_many :followers,
    through: :follower_records,
    source: :follower

  has_many :followed_users,
    through: :followed_user_records,
    source: :followed
  
    has_many :followed_users_posts,
    through: :followed_users,
    source: :posts
    
  has_many :likes
  has_many :liked_posts,
    through: :likes,
    source: :post
  
  has_many :posts
    -> {order('created_at desc')}

  # has_many :recent_posts_15,
  #   -> {order('created_at desc').limit(15) },
  #   class_name: :Post

  def downcase_fields
    self.username.downcase!
    self.email.downcase!
  end
  def self.find_by_credentials(signin, password)
    user = User.find_by_email(signin.downcase) || User.find_by_username(signin.downcase)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = token
    self.save!
    session_token
  end

  private
  def token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= token
  end

  def ensure_following_self
    Following.create(follower_id: id,followed_id: id) if Following.where(follower_id: id,followed_id: id).empty?
  end

  def default_users
    ['crossconnectmag',
    "dvdp    ",
    "obviologist",
    "darksilenceinsuburbia",
    "skunkbear"]
  end

  def follow_default_users
    default_users.each do |blog_name|
      blog_id = User.find_by_username(blog_name).id
      Following.create(follower_id: id, followed_id: blog_id)
    end
  end

  def reset_demo_user
    if self.username == 'demo user'
      followed_user_records.destroy_all
      posts.destroy_all
      Following.create(follower_id: id, followed_id: id)
      default_users.each do |blog_name|
        blog_id = User.find_by_username(blog_name).id
        # byebug
        Following.create(follower_id: self.id, followed_id: blog_id)
      end
    end
  end

  def ensure_avatar
    unless self.avatar.attached?
      require 'open-uri'
      avatars = ['https://imgur.com/jnGiG1S.jpeg',
                  'https://i.imgur.com/PDkdrm6.png',
                  'https://i.imgur.com/QtFQt8p.png',
                  'https://i.imgur.com/piyqSHU.png',
                  'https://i.imgur.com/aEr4I1D.png',
                  'https://i.imgur.com/08sSlrI.png',
                  'https://i.imgur.com/klaH0DO.png',
                  'https://i.imgur.com/lzJzuN2.png',
                  'https://i.imgur.com/3nhqo4F.png',
                  'https://i.imgur.com/OpW7qCd.png']
      self.avatar.attach(io: open(avatars.sample), filename: 'default')
    end
  end
end
