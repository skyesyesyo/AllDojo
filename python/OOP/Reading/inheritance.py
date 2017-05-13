# class Parent(object): # inherits from the object class
  # parent methods and attributes here
# class Child(Parent): #inherits from Parent class so we define Parent as the first parameter
  # parent methods and attributes are implicitly inherited
  # child methods and attributes
############################
class Vehicle(object):
	"""parent"""
	def __init__(self, wheels, capacity, make, model):
		self.wheels = wheels
		self.capacity = capacity
		self.make = make
		self.model = model
		self.mileage = 0
	def drive(self, miles):
		self.mileage = self.mileage + miles
		return self
	def reverse(self, miles):
		self.mileage -= miles
		return self
########################
class Bike(Vehicle):
	"""subclass"""
	def vehicle_type(self):
		return "Bike_yo"
class Car(Vehicle):
	"""subclass"""
	def set_wheels(self):
		self.wheels = 4
		return self
class Airplane(Vehicle):
	def fly(self, miles):
		self.mileage += miles
		return self
######################
v_dodge = Vehicle(4, 8, "dodge", "minivan")
b_Schwinn = Bike(2, 1, "Schwinn", "Paramount")
c_toyota = Car(8, 5, "Toyota", "Matrix")
a_airbus = Airplane(22, 853, "Airbus", "A380")
######################
print v_dodge.make	#calling attriubte
v_dodge.drive(10)	
print v_dodge.mileage

print b_Schwinn.vehicle_type()	#using method

c_toyota.set_wheels()
print c_toyota.wheels

a_airbus.fly(580)
print a_airbus.mileage