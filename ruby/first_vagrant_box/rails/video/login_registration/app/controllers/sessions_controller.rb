class SessionsController < ApplicationController

	def create
		# to check if the user exist
		@user = User.find_by(email: params[:user][:email])
		if @user
			# Oh user is there, then password correct?
			if @user.authenticate(params[:user][:password])
				# it is correct then
				session[:user_id] == @user.id
				redirect_to "/users/show"
			else
				flash[:errors] = ["Password is incorrect"]
				redirect_to :back
			end
		else
			flash[:errors] = ["Email not found. Please try again"]
			redirect_to :back
		end
	end

	def destroy
		reset_session
		redirect_to :root
	end

end
