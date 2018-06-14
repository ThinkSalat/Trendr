class Api::LikesController < ApplicationController
  def create
    Like.create(
      user_id: params[:user_id],
      post_id: params[:id]
      )
    @post = Post.find(params[:id])
    render 'api/likes/create'
  end

  def destroy
    Like.find_by(
      user_id: params[:user_id],
      post_id: params[:id]
      ).try(:destroy)
    @post = Post.find(params[:id])
    render 'api/likes/destroy'
  end

  def index
  end
end
