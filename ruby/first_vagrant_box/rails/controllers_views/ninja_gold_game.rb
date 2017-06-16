# No models
# No db

# rpg.scss
*{
	margin: 0px;
	padding: 0px;
	font-family: Arial;
}

#wrapper{
	width: 1100px;
	margin: 10px auto;
}

p strong{
	padding: 1px 10px;
	border: 1px solid black;
}

form{
	display: inline-block;
	width: 230px;
	padding: 20px 0px;
	border: 1px solid black;
	margin: 10px 15px 10px 0px;
	text-align: center;
}

ul{
	list-style: none;
}

li{
	padding: 5px 0px;
}

input{
	padding: 5px;
	margin-top: 10px;
}

#activities{
	font-size: .9em;
	width: 979px;
	height: 200px;
	overflow: scroll;
	padding: 3px;
	border: 1px solid gray;
}

.earned{
	color: green;
}

.lost{
	color: red;
}

# rpg_controller.rb
class RpgController < ApplicationController
  def index
    session[:gold] ||= 0
    session[:activities] ||= []

    @gold = session[:gold]
    @activities = session[:activities]
  end

  def new
    if params[:building] == 'farm'
      gold = rand(10..20)
    elsif params[:building] == 'cave'
      gold = rand(5..10)
    elsif params[:building] == 'house'
      gold = rand(2..5)
    elsif params[:building] == 'casino'
      gold = rand(-50..50)
    end

    current_time = Time.now

    if gold > 0
      session[:activities] << "Earned #{gold} golds from the #{params[:building]}! (#{current_time.strftime('%Y/%m/%d %l:%M %P')})"
    else
      session[:activities] << "Entered a casino and lost #{gold} golds... Ouch. (#{current_time.strftime('%Y/%m/%d %l:%M %P')})"
    end

    session[:gold] += gold
    redirect_to :root
  end
end



# routes.rb
Rails.application.routes.draw do
  root "rpg#index"
  post "process" => "rpg#new"
end

# rpg>index.html.erb
​<div id="wrapper">​
	<p>Your Gold: <strong><%= @gold %></strong></p>​
	<div id="places">​
		<form action="/process" method="post">​
			<input name="authenticity_token" value="<%= form_authenticity_token %>" type="hidden">​
			<input type="hidden" name="building" value="farm">​
			<ul>​
				<li><strong>Farm</strong></li>​
				<li>(earns 10-20 golds)</li>​
				<li><input type="submit" value="Find Gold!" /></li>​
			</ul>​
		</form>​
		<form action="/process" method="post">​
			<input name="authenticity_token" value="<%= form_authenticity_token %>" type="hidden">​
			<input type="hidden" name="building" value="cave">​
			<ul>​
				<li><strong>Cave</strong></li>​
				<li>(earns 5-10 golds)</li>​
				<li><input type="submit" value="Find Gold!" /></li>​
			</ul>​
		</form>​
		<form action="/process" method="post">​
			<input name="authenticity_token" value="<%= form_authenticity_token %>" type="hidden">​
			<input type="hidden" name="building" value="house">​
			<ul>​
				<li><strong>House</strong></li>​
				<li>(earns 2-5 golds)</li>​
				<li><input type="submit" value="Find Gold!" /></li>​
			</ul>​
		</form>​
		<form action="/process" method="post">​
			<input name="authenticity_token" value="<%= form_authenticity_token %>" type="hidden">​
			<input type="hidden" name="building" value="casino">​
			<ul>​
				<li><strong>Casino</strong></li>​
				<li>(earns/takes 0-50 golds)</li>​
				<li><input type="submit" value="Find Gold!" /></li>​
			</ul>​
		</form>​
	</div>​
	<div>​
		<p>Activities:</p>​
		<div id="activities">​
				<!-- Show the messages by reverse to see the latest activity -->
			<% @activities.reverse.each do |element| %>​
				<% if element.include?("Earned") %>​
					<p class="earned"><%= element %></p>​
				<% else %>​
					<p class="lost"><%= element %></p>​
				<% end %>​
			<% end %>​
		</div>​
	</div>​
​</div>​