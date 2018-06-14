class Api::FollowingsController < ApplicationController

  def create
    Following.create(follow_params)
  end

  def destroy
    Following.find_by(
      follower_id: params[:follow][:follower_id],
      followed_id: params[:follow][:followed_id]
    ).try(:destroy)
  end

  def index
  end

  private
  def follow_params
    params.require(:follow).require(:follower_id, :followed_id)
  end
end
