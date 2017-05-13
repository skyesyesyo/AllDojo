# PART 1

class MathDojo(object):
	"""Parents"""
	def __init__(self):
		self.total = 0
	def add(self, *num):
		for i in range(0, len(num)):
			self.total += num[i]
		return self
	def subtract(self, *num):
		for i in range(0, len(num)):
			self.total -= num[i]
		return self
	# def mut(x, y):
	# 	return x * y
	# def sub(x, y):
	# 	return x-y
	def result(self):
		print self.total
		return self
# +++++++++++++++++++++++++
#############
# This way works too! but other one is better yo~
# math = MathDojo()
# math.result()
# math.add(2).add(2, 5).subtract(3, 2).result()
############################
# ++++++++++++++++++++++++++++++++++++++++++++
MathDojo().add(2).add(2, 5).subtract(3, 2).result()
# +++++++++++++++++++++++++++++++++++++++++
############################

# PART 2
class MathDojo2(object):
	"""Parents"""
	def __init__(self):
		self.total = 0
	def add(self, *num):
		for i in range(0, len(num)):
			if type(num[i]) is list or type(num[i]) is tuple:
				for j in num[i]:
					self.total += j
			else:
				self.total += num[i]
		return self
	def subtract(self, *num):
		for i in range(0, len(num)):
			if type(num[i]) is list or type(num[i]) is tuple:
				for j in num[i]:
					self.total -= j
			else:
				self.total -= num[i]
		return self
	def result(self):
		print self.total
		return self
#########################
MathDojo2().add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2,[2,3],[1.1,2.3]).result()
#######################

# class Mathdojo(object):
#     def __init__(self):
#         self.total = 0
#     def add(self, *num):
#         for i in range(0, len(num)):
#             if type(num[i]) is list or type(num[i]) is tuple:
#                 for j in num[i]:
#                     self.total += j
#             else:
#                 self.total += num[i]
#         return self
#     def subtract(self,*num):
#         for i in range(0, len(num)):
#             if type(num[i]) is list or type(num[i]) is tuple:
#                 for j in num[i]:
#                     self.total -= j
#             else:
#                 self.total -= num[i]
#         return self
#     def result(self):
#         print self.total
# md = Mathdojo().add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).result()
# print md