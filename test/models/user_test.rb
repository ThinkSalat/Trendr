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

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
