# declare a class and give it name User
class User(object):
	# the__init__ method is called every time a new object is created
	def __init__(self, name, email):
		# set some instance variables. just like any variable we can call these anytime
		self.name = name
		self.email = email
		self.logged = False
		# this is method we created to help user login
		def login(self):
			self.logged = True
			print self.name + "is logged in."
			return self
# now create an instance of the class
new_user = User("Anna", "anna@anna.com")
print new_user.email

print new_user.logged
login(new_user)