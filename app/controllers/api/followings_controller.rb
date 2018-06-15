class Api::FollowingsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    Following.create(
      follower_id: params[:follow][:follower_id],
      followed_id: params[:follow][:followed_id])
      @user = User.find(params[:follow][:follower_id])
      render 'api/follows/create'
  end

  def destroy
    # byebug
    Following.find_by(
      follower_id: params[:follow][:follower_id],
      followed_id: params[:follow][:followed_id]
    ).try(:destroy)
    @user = User.find(params[:follow][:follower_id])
    render 'api/follows/destroy'
  end

  def index
    @followers = User.find(params[:id]).followers
    @followed_users = User.find(params[:id]).followed_users
  end

  private
  def follow_params
    params.require(:follow).require(:follower_id, :followed_id)
  end
end
