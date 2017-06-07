class Project
	attr_accessor :name, :description

	def initialize(name, description)
		@name = name
		@description = description
		puts "ok got it"
	end

	def elevator_pitch
		"#{@name}, #{@description}"
	end
end

project1 = Project.new("Project 1", "Descrition 1")
puts project1.name
puts project1.elevator_pitch
p2 = Project.new("steve", "kim")

