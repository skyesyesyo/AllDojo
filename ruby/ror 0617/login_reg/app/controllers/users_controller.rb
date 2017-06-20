class UsersController < ApplicationController

  def index
  end

  def show
  	@user = User.find(session[:user_id])
  end

  def registration
  	@user = User.new(user_params)
  	if @user.save
  		session[:user_id] = @user.id 
  		redirect_to '/users/show'
  	else
  		flash[:errors] = @user.errors.full_messages
  		redirect_to :back
  	end
  end

  def login
  end

  private
  def user_params
  	params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
