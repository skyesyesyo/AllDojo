class TimesController < ApplicationController
  # get 'times/main'
  # root "times#main"
  def main
  	# Get the current date time and save it to a instance variable
  	@time = Time.current
  end
end
