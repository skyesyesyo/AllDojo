class Bike(object):
	"""docstring for bike"""
	def __init__(self, name, price, max_speed, miles):
		self.name = name
		self.price = price
		self.max_speed = max_speed
		self.miles = miles
	def displayinfo(self):
		print """
{}
The price of your bike is: ${}
The speed of your bike is: {} mph
The mileage of your bike is: {} mile(s)
		""".format(self.name,self.price, self.max_speed, self.miles)
		print "-" * 20
		return self
	def ride(self, num=1):
		print "Riding"
		self.miles = self.miles + (10 * num)
		return self
	def reverse(self, num=1):
		print "Reversing"
		if self.miles >5:
			self.miles = self.miles - (5 * num)
		else:
			self.miles = "No neg"
		return self


harley = Bike("harley", 200, 25, 0)
kawasaki = Bike("kawasaki", 1567, 105, 55)
honda = Bike("honda", 50, 13, 0)

# print bike1.price
# print bike2.max_speed
# print bike3.miles

harley.ride(3).reverse().displayinfo()
kawasaki.ride(2).reverse(2).displayinfo()
honda.reverse(3).displayinfo()