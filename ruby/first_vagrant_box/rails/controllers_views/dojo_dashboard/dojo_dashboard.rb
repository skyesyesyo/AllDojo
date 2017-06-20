
# app>controllers>dojos_controller.rb
class DojosController < ApplicationController

  def index
  	@dojos = Dojo.all
  end

  def new
  end

  def show
  	@dojo = Dojo.find(params[:id])
  	@students = @dojo.students
  end

  def edit
  	puts params[:id]
  	@dojo = Dojo.find(params[:id])
  end

  def create
  	@dojo = Dojo.new(dojo_params)
  	if @dojo.save
  		redirect_to :root
  	else
  		flash[:errors] = @dojo.errors.full_messages
  		redirect_to :back
  	end
  end

  def update
  	@dojo = Dojo.find(params[:id])
  	if @dojo.update(dojo_params)
  		redirect_to :root
  	else
  		flash[:errors] = @dojo.errors.full_messages
  		redirect_to :back
  	end
  end

  def destroy
  	if Dojo.find(params[:id]).destroy
  		redirect_to :root
  	else
  		redirect_to :back
  	end
  end

  private
	  def dojo_params
	  	params.require(:dojo).permit(:branch, :street, :city, :state)
	  end
end

# controllers>students_controller
class StudentsController < ApplicationController

  def show
  	@dojo = Dojo.find(params[:dojo_id])
  	@student = Student.find(params[:id])
  	@cohort = Student.where("id != ?", @student.id).where(dojo_id: @student.dojo_id).where("DATE() = ?", @student.created_at.strftime('%Y-%m-%d'))
  end

  def new
  	@dojo = Dojo.find(params[:dojo_id])
  	@all_dojos = Dojo.all
  end

  def edit
  	@dojo = Dojo.find(params[:dojo_id])
  	@all_dojos = Dojo.all
  	@student = Student.find(params[:id])
  end

  def create
  	@student = Student.new(student_params)

  	if @student.save
  		redirect_to dojo_path(params[:dojo_id])
  	else
  		flash[:errors] = @student.errors.full_messages
  		redirect_to :back
  	end

  end

  def update
  	@student = Student.find(params[:id])
  	if @student.update(student_params)
  		redirect_to dojo_path(params[:dojo_id])
  	else
  		flash[:errors] = @student.errors.full_messages
  		redirect_to :back
  	end
  end

  def destroy
  	if Student.find(params[:id]).destroy
  		redirect_to dojo_path(params[:dojo_id])
  	else
  		flash[:errors] = @student.errors.full_messages
  		redirect_to :back
  	end
  end

  private 
  	def student_params
  		params.require(:student).permit(:first_name, :last_name, :email, :dojo_id)
  	end
end

# model>dojo.rb
class Dojo < ActiveRecord::Base
	validates :branch, :street, :city, :state, presence: true
	has_many :students
end

# model>student.rb
class Student < ActiveRecord::Base
  belongs_to :dojo
end

# config>routes.rb
Rails.application.routes.draw do

  root 'dojos#index'

  resources :dojos do 
    resources :students
  end