class Api::PostsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @post = Post.new(post_params)
    # @post.user_id = current_user.id

    if @post.save
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
    
    if @post.update_attributes(post_params)
      render "api/posts/show"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end
  
  def index
    @posts = Post.all
    # @posts = current_user.followed_users.posts
    render 'api/posts/index'
  end
  
  def show
    @post = Post.find(params[:id])
    render "api/posts/show"
  end
  
  def destroy
    @post = Post.find(params[:id])
    @post.try(:destroy)
    render json: @post
  end

  private

  def post_params
    params.require(:post).permit(:user_id, :title, :post_type, :summary, :body, :private, :photoset_layout, :caption, :source_url, :source_title)
  end
end
