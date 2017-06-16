# app>controllers>surverys_controller.rb
class SurveysController < ApplicationController
    def index
        # Set session views to zero if it doesn't exist yet
        session[:views] ||= 0
    end 

    def process_survey
        # Increment the session views upon submission of the form          
        session[:views] = session[:views] + 1

        # Save the post data (params[:survey]) to session
        session[:result] = params[:survey]

        # Save success message to flash to show it once
        flash[:success] = "Thanks for submitting this form! You have submitted this form #{ session[:views] } time(s) now."
        
        # To prevent submission of form with page reload
        redirect_to '/surveys/result'
    end

    def result
        # Save the data to variable accessible in the views
        @result = session[:result]
    end
end
# config>locales>routes.rb
Rails.application.routes.draw do
  root 'surveys#index'
  get 'surveys/result'
  post 'survey' => 'surveys#process_survey'
end

# app>views>surveys>index.html.erb
<div id="container">
	<form action='/survey' method='post'>
    	<input name="authenticity_token" value="<%= form_authenticity_token %>" type="hidden">
    	<div>
    		<label>Your Name:</label>
	    	<input type='text' name='survey[name]'>
    	</div>
	    <div>
	    	<label>Dojo Location:</label>
		    <select name="survey[location]" class="select">
				<option value="Mountain Valley, Ca">Mountain Valley, SV</option>
				<option value="San Diego, Ca">San Diego, Ca</option>
				<option value="Seattle, Phoenix">Seattle, Pheonix</option>
				<option value="San Jose, Ca">San Jose, Ca</option>
			</select>
	    </div>
		<div>
			<label>Favorite language:</label>
			<select name="survey[language]" class="select">
				<option value="Javascript">Javascript</option>
				<option  value="PHP">PHP</option>
				<option value="HTML">HTML</option>
				<option value="CSS">CSS</option>
			</select>
		</div>
		<div>
			<label>Comment:</label>
			<textarea rows="4" cols="35" name="survey[comment]"></textarea>
		</div>
		<div>
			<input type='submit' value='Submit'>
		</div>
    </form>
</div>    
# app>views>surveys>result.html.erb
<div id="container">
	<% if flash[:success] %>
  		<div id="success">
  			<p><%= flash[:success] %></p>
		</div>
	<% end %>
	<table id="survey_form">
		<tr>
			<td colspan='2'><strong><u>Submitted Information</u></strong></td>
		</tr>
		<tr>
			<td>Name:</td>
			<td><%= @result['name'] %></td>
		</tr>
		<tr>
			<td>Dojo Location:</td>
			<td><%= @result['location'] %></td>
		</tr>
		<tr>
			<td>Favorite Language:</td>
			<td><%= @result['language'] %></td>
		</tr>
		<tr>
			<td>Comment:</td>
			<td><%= @result['comment'] %></td>
		</tr>
		<tr>
		    <td colspan="2" align="right">
		    	<%= link_to "Go back", root_path %>
		    </td>
		</tr>
	</table>
</div>