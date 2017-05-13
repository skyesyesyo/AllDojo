class Product(object):
	"""Sell, Add tax, Return, Display info"""
	def __init__(self, price, item_name, weight, brand, cost, status):
		self.price = price
		self.item_name = item_name
		self.weight = weight
		self.brand = brand
		self.cost = cost
		self.status = status
	def display_info(self):
		print "-" * 20
		# self.status = "for sale"
		print """
Item Name: {}
Status: {}
Price: ${}
Weight: {}lb
Brand: {}
Cost: ${}
		""".format(self.item_name, self.status, self.price, self.weight, self.brand, self.cost)
		return self
	def sold(self):
		self.status = "sold"
		return self
	def tax(self, tax_rate=0):
		self.price = self.price * (1 + tax_rate)
		return self
	def ret(self, reason="unopen"):
		if reason == "defective":
			self.status = "sold"
			self.price = 0
		if reason == "unopen":
			self.status = "for sale"
		if reason == "openbox":
			self.status = "for sale"
			self.price = self.price * 0.8
		return self
#######################################################
iphone = Product(600, "iPhone6", "1", "Apple", 300, "for sale")
#######################################################
iphone.display_info()
iphone.tax().display_info()
iphone.tax(.3).display_info()
iphone.ret().display_info()
iphone.ret("defective").display_info()
iphone.ret("openbox").display_info()