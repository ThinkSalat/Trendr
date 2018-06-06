class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show
    render "api/users/profile"
  end

  def create
    @user = User.new(user_params)
    p @user
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:userId])

    if @user.update_attributes(update_user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :title, :description, :private_posts, :private_likes, :private_followers, :private_followings)
  end

  def update_user_params
    params.require(:user).permit(:email, :password, :title, :description, :private_posts, :private_likes, :private_followers, :private_followings)
  end
end
