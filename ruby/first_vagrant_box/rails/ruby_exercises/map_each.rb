# This example is from
# https://learn.onemonth.com/ruby-tutorial-map-vs-each-a692b63e1850

toppings = ["pepperoni", "mushroom", "bacon", "pineapple"]

# USING MAP
def pizza(toppings)
	toppings.map do |topping|
		"I love #{topping} pizza!"
	end
end

# USING EACH
def pizza(toppings)
	my_statements = []
	toppings.each do |topping|
		my_statements << "I love #{topping} pizza!"
	end
	my_statements
end