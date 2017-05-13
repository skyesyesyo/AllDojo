class Animal(object):
	"""Parent"""
	def __init__(self, name, health=100):
		self.name = name
		self.health = health
		
	def walk(self, num=1):
		self.health -= (1*num)
		return self
	def run(self, num=1):
		self.health -= (5*num)
		return self
	def displayHealth(self):
		# if isinstance(self, Dragon):
		# 	print "This is a dragon!"
		print "Animal name is", self.name
		print "Animal health is", self.health
		return self
#################
animal_yoyo = Animal("yoyo")

animal_yoyo.displayHealth()
animal_yoyo.walk(3).run(2).displayHealth()
###################
class Dog(Animal):
	"""sub"""
	def __init__(self, health):
		super(Dog, self).__init__(health)
		self.health = 150
	def pet(self, num=1):
		self.health += (5*num)
		return self
####################
dog_cici = Dog("cici")
dog_cici.displayHealth()
dog_cici.walk().run().pet().displayHealth()
dog_cici.walk(3).run(2).pet(2).displayHealth()
####################
class Dragon(Animal):
	"""subclass"""
	def __init__(self, health):
		print("hello")
		super(Dragon, self).__init__(health)
		self.health = 170
	def fly(self, num=1):
		print("yello")
		self.health -= (10*num)
		return self
	def displayHealth(self):
		print "It is a Dragon!"
		super(Dragon, self).displayHealth()
		return self

###############
d_g = Dragon("g")
d_g.displayHealth()
d_g.walk(3).run(2).fly(2).displayHealth()

		
		