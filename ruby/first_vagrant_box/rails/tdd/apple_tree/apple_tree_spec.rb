require_relative "apple_tree"

RSpec.describe AppleTree do
	before(:each) do
		@tree = AppleTree.new
	end

	it "should have an age attribute with getter and seter methods" do
		@tree.age = 100
		expect(@tree.age).to eq(100)
	end


	it "should have a getter for the height attribute" do
		expect(@tree.height).to eq(10)
	end

	it "should raise a NoMethodError when setting the height attribute" do
		expect{ @tree.apple_count = 1 }.to raise_error(NoMethodError)
	end

	it "should have a getter for the apple_count attribute" do
		expect(@tree.apple_count).to eq(0)
	end

	it "should raise a NoMethodError when setting the apple_count attribute" do
		expect{ @tree.apple_count = 1 }.to raise_error(NoMethodError)
	end

	context "should have method year_gone_by" do
		before(:each) do
			@tree.year_gone_by
		end

		it "adds one year to the age attribute" do
			expect(@tree.age).to eq(1)
		end

		it "increases the height by 10% of it's current height" do
			expect(@tree.height).to eq(11)
		end

		context "Increases the apple count by 2 within a range" do
			it "should not increase if the age is less than or equal to 3" do
				# current age is 3 since the before(:each) in the parent context
				2.times { @tree.year_gone_by }
				expect(@tree.apple_count).to eq(0)
			end

			it "should increase if the age is between 4 and 10" do
				# current age is 5 since the before(:each) in the parent context
				4.times { @tree.year_gone_by }
				expect(@tree.apple_count).to eq(4)
			end

			it "should not increase if the age is greater than 10" do
				# current age is 11 since the before(:each) in the parent context
				10.times { @tree.year_gone_by }
				expect(@tree.apple_count).to eq(14)
			end

			it "should have a method call pick_apples that takes all apples of the tree" do
				@tree.pick_apples
				expect(@tree.apple_count).to eq(0)
			end
		end
	end
end