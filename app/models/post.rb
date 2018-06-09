class Post < ApplicationRecord
  #  VALIDATIONS
  validates :type, presence: :true
  before_create :set_date
  
  # ASSOCIATIONS
  belongs_to :user

  has_many_attached :images

  # notes
  # has_many :likes
  # has_many :tags
  # has_many :notes
  # has_many :comments
  # has_many :reblogs
  
  # METHODS

  # post's state is unpublished until user hits submit, but is created once an image is uploaded
  # if they submit, it's published.

  private

  def set_date
    this.date = Time.now.to_datetime
  end
end
