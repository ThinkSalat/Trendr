class Post < ApplicationRecord

  belongs_to :user

  has_many_attached :images

  # notes
  # has_many :likes
  # has_many :tags
  # has_many :notes
  # has_many :comments
  # has_many :reblogs
  
end
