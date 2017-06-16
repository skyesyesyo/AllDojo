rails new time_display

# app>controllers>times_controller.rb
class TimesController < ApplicationController
  def main
    #  Get the current date time and save it to a instance variable
    @time = Time.new

    # use @time = Time.current to use seeting from config>locales>application.rb
    # config.time_zone = 'Pacific Time (US & Canada)'
    # $ rake time:zones:all
  end
end

# routes.rb
Rails.application.routes.draw do
 root "times#main"
end

# app>views>times>main.html.erb
<div class="container">
	<div class="time_container">
		<h1>The Current Time and Date:</h1>
		<div class="time_info well well-small">
			<!-- Manipulate the date format using strftime  -->
			<h3><%= @time.strftime("%b %d, %Y") %></h3>
			<h3><%= @time.strftime("%I:%M %p") %></h3>
	    </div>
	</div>
</div>
