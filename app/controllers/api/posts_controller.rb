class Api::PostsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    params[:post] = params
    @post = Post.new(post_params)

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
    @posts = current_user.followed_users_posts.last(5)
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
    
    params.require(:post).permit(
      :user_id, 
      :title, 
      :post_type, 
      :summary, 
      :body, 
      :private, 
      :photoset_layout, 
      :caption, 
      :source_url, 
      :source_title, 
      images: []
      )
  end
end
