class Project
	attr_accessor :name, :description, :owner
	def initialize name, description, owner
		@name = name
		@description = description
		@owner = owner
		@tasks = []
	end

	def elevator_pitch
		return "#{@name}, #{description}"
	end

	def tasks
		return @tasks
	end

	def add_task new_item
		@tasks << new_item
	end

	def print_tasks
		@tasks.each {|task| puts task}
	end
end

puts "*"*50
# bakery_nosh = Project.new("Project bn", "A good description", "Steve kim")

# puts bakery_nosh.elevator_pitch
# bakery_nosh.add_task "Baking"
# puts bakery_nosh.task