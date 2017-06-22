class AppleTree
	attr_accessor :age
	attr_reader :height, :apple_count


	def initialize
		@age = 0
		@height = 10
		@apple_count = 0
	end

	def year_gone_by
		@age += 1
		@height = @height + (@height * 0.1).round(2)
		@apple_count += 2 if (4..10).include?(@age)
		# 4.upto(10) { |i| @apple_count += 2}
		# if @age == (4..10)
		# 	@apple_count += 2
	end

	def pick_apples
		@apple_count = 0
		
	end

end