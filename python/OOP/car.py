class Car(object):
	"""Car function yo~"""
	def __init__(self, name, price, speed, fuel, mileage):
		self.name = name
		self.price = price
		self.speed = speed
		self.fuel = fuel
		self.mileage = mileage
	def display_all(self):
		print "-" * 20
		if self.price > 10000:
			tax = 0.15
		else:
			tax = 0.12
		print """
{}
Price: ${}
Speed: {}mph
Fuel: {}
Mileage: {}mpg
Tax: {}
		""".format(self.name, self.price, self.speed, self.fuel, self.mileage, tax)
		return self
		
Honda = Car("Honda", 2000, 35, "Full", 15)
Toyoda = Car("Toyoda", 2000, 5, "Not Full", 105)
Hyndai = Car("Hyndai", 2000, 15, "Kind of Full", 95)
BMW = Car("BMW", 2000, 25, "Full", 25)
Ford = Car("Ford", 2000, 45, "Empty", 25)
Mercedes = Car("Mercedes", 20000000, 35, "Empty", 15)

Honda.display_all()
Toyoda.display_all()
Hyndai.display_all()
BMW.display_all()
Ford.display_all()
Mercedes.display_all()