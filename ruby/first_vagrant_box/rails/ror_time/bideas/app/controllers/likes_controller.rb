class LikesController < ApplicationController

	def create
		Like.create like_params
		redirect_to :back
	end

	private
		def like_params
			params.require(:like).permit(:brightidea_id).merge(user: current_user)
		end

end
