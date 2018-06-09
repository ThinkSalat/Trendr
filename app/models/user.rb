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
  
  before_save :downcase_fields
  before_validation :ensure_session_token
  
  # has_many :posts
  # has_many :likes
  # has_many :followers
  # has_many :followed_users
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
end
