class ProductsController < ApplicationController
  def index
  	@products = Product.all
  	# render json: @products
  	puts "You see me?"
  end

  def create
  	@product = Product.create(name: params[:name], description: params[:description])
  	redirect_to '/products/index'
  	# render :text => @product.inspect
  	
  end

  def new
  end
end
