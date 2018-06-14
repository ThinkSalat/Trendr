class Api::LikesController < ApplicationController
  def create
    @post = Post.find(params[:id])
    render 'api/likes/create'
  end

  def destroy
    @post = Post.find(params[:id])
    render 'api/likes/destroy'
  end

  def index
  end
end
