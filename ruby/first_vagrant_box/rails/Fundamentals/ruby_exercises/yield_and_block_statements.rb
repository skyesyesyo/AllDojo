def test1
	puts "You are in the method"
	yield
	puts "You are again back to the method"
	yield
end
test1 { puts "You are in the block"}

puts '*'*50

def test2
	yield 5
	puts "You are in the method test2"
	yield 100
end
test2 { |i| puts "You are in the block #{i}"}

puts '*'*50

def square(num)
	puts "num is #{num}"

	x = yield(num)
	puts "x has a value of #{x}"

	y = yield(num) * x
	puts "y has a value of #{y}"
end

square(5) {|i| i*i}