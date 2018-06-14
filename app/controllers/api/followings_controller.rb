class Api::FollowingsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    Following.create(
      follower_id: params[:follow][:follower_id],
      followed_id: params[:follow][:followed_id])
      @user = User.find(params[:follow][:follower_id])
      render json: 'api/follows/create'
  end

  def destroy
    Following.find_by(
      follower_id: params[:follow][:follower_id],
      followed_id: params[:follow][:followed_id]
    ).try(:destroy)
    @user = User.find(params[:follow][:follower_id])
    render json: 'api/follows/destroy'
  end

  def index
  end

  private
  def follow_params
    params.require(:follow).require(:follower_id, :followed_id)
  end
end
