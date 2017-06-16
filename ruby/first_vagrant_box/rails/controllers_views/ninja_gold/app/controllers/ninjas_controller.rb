class NinjasController < ApplicationController

	def index
		unless session[:gold]
			session[:gold] = 0
		end
		unless session[:activities]
			session[:activities] = []
		end
		# Sotring at variable so we can print it!
		@gold = session[:gold]
		@activities = session[:activities]
	
	end

	def create
		# name of input in html
		if params[:building] == 'farm'
			new_gold = Random.rand(10..20)
			session[:gold] += new_gold
		elsif params[:building] == 'cave'
			new_gold = Random.rand(5..10)
			session[:gold] += new_gold
		elsif params[:building] == 'house'
			new_gold = Random.rand(2..5)
			session[:gold] += new_gold
		elsif params[:building] == 'casino'
			new_gold = Random.rand(-50..50)
			session[:gold] += new_gold
		end
		if new_gold > 0
			session[:activities] << {won: 'true', message: "You won #{new_gold}"}
		else
			session[:activities] << {won: 'false', message: "You lost #{new_gold}"}
		end	
		redirect_to :root
	end

	def reset
		reset_session
		redirect_to :root
	end
end
