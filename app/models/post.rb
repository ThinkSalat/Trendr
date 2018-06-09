class Post < ApplicationRecord

  validates :type, presence :true
  
  belongs_to :user

  has_many_attached :images

  # notes
  # has_many :likes
  # has_many :tags
  # has_many :notes
  # has_many :comments
  # has_many :reblogs
  

  private

  def set_date
    this.date = Time.now.to_datetime
  end
end
