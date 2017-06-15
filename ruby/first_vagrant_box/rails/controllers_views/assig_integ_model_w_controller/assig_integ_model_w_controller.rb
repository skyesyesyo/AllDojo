# schema.rb
ActiveRecord::Schema.define(version: 20170307215423) do

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
# models user.rb
class User < ActiveRecord::Base
end
# users_controllers.rb
class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def new
  end

  def create
    User.create(name: params[:name])
    redirect_to "/users"
  end

  def show
    render json: User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
  end

  def total
    render json: { total: User.count }
  end
end

# routes.rb
Rails.application.routes.draw do
  get "users" => "users#index"
  get "users/new" => "users#new"
  get "users/total" => "users#total"
  get "users/:id" => "users#show"
  get "users/:id/edit" => "users#edit"
  post "users" => "users#create"
end

# app>views>users>new.html.erb
<h1>New user</h1>

<form action="users" method="post">
  <input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>">
  <p>
    <label>Name:</label>
    <input type="text" name="name">
  </p>
  <input type="submit" value="Create User">
  
</form>

# app>views>users>edit.html.erb
<h1>Edit User</h1>

<form action="/users/<%= @user.id %>" method="post">
    <input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>">
    <input type="hidden" name="_method" value="patch">
  <p>
    <label>Name:</label>
    <input type="text" name="name" value="<%= @user.name %>">
  </p>
  <input type="submit" value="Edit User">
</form>