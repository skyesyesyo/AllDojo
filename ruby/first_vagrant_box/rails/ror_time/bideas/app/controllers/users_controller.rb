class UsersController < ApplicationController
	skip_before_action :require_login, only: [:new, :create]
	before_action :require_correct_user, only: [:edit, :show, :update, :destroy]

  def index
  end

  def create
  	@user = User.new user_params
  	if @user.save
  		redirect_to :root
  	else
  		flash[:errors] = @user.errors.full_messages
  		redirect_to :back
  	end

  end

  def show
    @user = User.find(params[:id])
    @like = Like.all
    @bidea = Brightidea.all
    
  end

  def edit
  end

  private
  	def require_correct_user
  		if current_user != User.find(params[:id])
  			redirect_to :root
  		end
  	end

  	def user_params
  		params.require(:user).permit(:name, :alias, :email, :password, :password_confirmation)
  	end

end
