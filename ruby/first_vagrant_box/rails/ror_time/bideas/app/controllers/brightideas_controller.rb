class BrightideasController < ApplicationController
	skip_before_action :require_login, only: [:new, :create]
  def index
    @user = User.find(session[:user_id])
    @brightideas = Brightidea.all
  end

  def create
  	@bidea = Brightidea.new bidea_params

  	if @bidea.save
  		redirect_to :back
  	else
  		flash[:errors] = @bidea.errors.full_messages
  		redirect_to :back
  	end
  end

  def show
    @post = Brightidea.find(params[:id])
    @likes = @post.likes
    @user = User.find(session[:user_id])
    # @bidea = Brightidea.first.content
    
  end

  def edit
  end

  def destroy
    @bidea = Brightidea.find(params[:id])
    @bidea.destroy if @bidea.user === current_user
    redirect_to :back
  end

  private
  	def bidea_params
  		params.require(:bidea).permit(:content, :user_id)
  	end

end
