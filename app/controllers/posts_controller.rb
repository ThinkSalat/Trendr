class PostsController < ApplicationController
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
    @post = Post.find(params[:postId])
    
    if @post.update_attributes(post_params)
      render "api/posts/#{@post.id}"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end
  
  def index
    # render json: current_user.followed_users.posts
    render json: Post.all
  end
  
  def show
    @post = Post.find(params[:postId])
    render "api/posts/#{params[:id]}"
  end
  
  def destroy
    @post = Post.find(params[:postId])
    @post.try(:destroy)
    render json: @post
  end

  private

  def post_params
    params.require(:post).permit(:title, :post_type, :summary, :body, :private, :photoset_layout, :caption, :source_url, :source_title)
  end
end
