class Person
	# @name
	attr_writer :first_name, :last_name, :email
	attr_reader :first_name, :last_name, :email
end

p = Person.new

p.first_name = "hello"
p.last_name = "world"

puts p.first_name, p.last_name