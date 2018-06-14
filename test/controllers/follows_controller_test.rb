require 'test_helper'

class FollowsControllerTest < ActionDispatch::IntegrationTest
  test "should get :create" do
    get follows_:create_url
    assert_response :success
  end

  test "should get :destroy" do
    get follows_:destroy_url
    assert_response :success
  end

  test "should get :index" do
    get follows_:index_url
    assert_response :success
  end

end
