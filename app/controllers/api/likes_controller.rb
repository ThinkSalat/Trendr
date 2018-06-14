class Api::LikesController < ApplicationController
  skip_before_action :verify_authenticity_token

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
    unless params[:id].empty?
      @posts = User.find(params[:id]).liked_posts
    else
      @posts = current_user.liked_posts
    end
    render 'api/posts/index'
  end
end
