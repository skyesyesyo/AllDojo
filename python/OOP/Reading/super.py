# from human import Human
class Human(object):
	"""parent"""
	def __init__(self, health):
		self.health = health
	def display(self):
		print self.health
		return self
#####################
class Wizard(Human):
	"""super"""
	def __init__(self, health):
		super(Wizard, self).__init__(health)	# use super to call the Human __init__ method
		self.intelligence = 10			# every wizard starts off with 10 intelligence
	def heal(self):
		self.health += 10
		return self

class Ninja(Human):
	"""super"""
	def __init__(self, health):
		super(Ninja, self).__init__(health)	# use super to call the Human __init__ method
		self.stealth = 10				# every Ninja starts off with 10 stealth
	def steal(self):
		self.stealth += 5
		return self
class Samurai(Human):
	"""super"""
	def __init__(self, health):
		super(Samurai, self).__init__(health)	# use super to call the Human __init__ method
		self.strength = 10				# every Samurai starts off with 10 strength
	def sacrifice(self):
		self.health -= 5
		return self
######################
normal_h = Human(100)
wiz_1 = Wizard(90)
samurai_1 = Samurai(100)
#####################
normal_h.display()
wiz_1.heal().display()
samurai_1.sacrifice().display()
############
print wiz_1.intelligence