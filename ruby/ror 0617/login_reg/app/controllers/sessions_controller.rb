class SessionsController < ApplicationController

	def create
		@user = User.find_by(email: params[:user][:email])
		if @user 
			if @user.authenticate(params[:user][:password])
				session[:user_id] = @user.id 
				redirect_to '/users/show'
			else
				flash[:errors] = ["Password is incorrect"]
				redirect_to :back
			end
		else
			flash[:errors] = ["Email not found. Please try again."]
			redirect_to :back
		end
	end

	def destroy
		reset_session
		redirect_to :root
	end
end
