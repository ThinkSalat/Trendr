class Api::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    signin = params[:user][:email] ? params[:user][:email] : params[:user][:username]
    password = params[:user][:password]
    @user = User.find_by_credentials(signin,password)
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
