require_relative 'project'

RSpec.describe Project do
	
	# If I need to use certain variable many time it is helpful
	before(:each) do
		@project1 = Project.new('Project 1', 'description 1', 'kevin')
		@project2 = Project.new('Project 2', 'description 2', 'steve')
	end

	it 'should have a tasks attribute that is an empty array' do
		expect(@project1.tasks).to eq([])
	end

	it 'shouid have a add_task method that pushes a single tasks to the tasks attribute' do
		@project1.add_task 'baking'
		expect(@project1.tasks).to eq(['baking'])
	end

	it 'should have a getter and setter method for owner' do@project1.owner = "steve"
		expect(@project1.owner).to eq("steve")
	end

	it 'should have a method that prints out all the current task' do 
		@project1.add_task 'baking'
		@project1.add_task 'clean'

		expect{@project1.print_tasks}.to output("baking\nclean\n").to_stdout

	end

end