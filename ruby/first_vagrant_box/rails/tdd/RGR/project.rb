class Project
	attr_accessor :name, :description

	def initialize name, description
		@name = name
		@description = description
		
	end

	def elevator_pitch
		"#{@name}, #{@description}"
	end
end









# class Project
#   attr_accessor :name, :description, :owner

#   def initialize name, desc
#     @name = name
#     @description = desc
#   end

#   def elevator_pitch
#     "#{@name}, #{@description}"
#   end
# end