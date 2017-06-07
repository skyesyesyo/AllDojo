
class Human
	attr_accessor :strength, :intelligence, :stealth, :health
	
	def initialize
		@strength = 3
		@intelligence =3
		@stealth = 3
		@health = 100
	end

	def attack(object)
		if object.class.ancestors.include?(Human)
			object.health -= 10
		else
			false
		end
	end
end

######
class Wizard < Human
	def initialize
		super
		@health = 50
		@intelligence = 25
	end

	def heal
		@health += 10
	end

	def fireball object
		if object.class.ancestors.include?(Human)
			object.health -= 20
		else
			false
		end
	end
end

#####
class Ninja < Human
	def initialize
		super
		@health = 175
	end

	def steal object
		if object.class.ancestors.include?(Human)
			@health += 10
		else
			false
		end
	end

	def get_away
		@health -= 15
	end
end
#######
class Samurai < Human
	@@samurai_c = 0

	def initialize
		super
		@health = 200
		@@samurai_c += 1
	end

	def death_blow object
		if object.class.ancestors.include?(Human)
			@health = 0
			object.health = 0
		else
			false
		end
	end

	def meditate
		@health = 200
	end

	def self.count
		@@samurai_c
	end
end





# steve = Human.new
# bill = Human.new
# puts steve.attack(bill) 
# puts steve.attack("Not a Human")
# puts bill.health

# steve = Wizard.new
# bill = Wizard.new
# puts steve.attack(bill) 
# puts steve.fireball(bill) 
# puts steve.attack("Not a Wizard")
# puts bill.health

steve = Samurai.new
bill = Samurai.new
puts steve.death_blow(bill) 
puts steve.attack("Not a Samurai")
puts bill.health
puts steve.meditate
puts Samurai.count 
