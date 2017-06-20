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
