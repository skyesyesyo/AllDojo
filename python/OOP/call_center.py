class Call(object):
	"""docstring for Call"""
	def __init__(self, unique_id, caller_name, caller_phone_number, time_of_call, reason_for_call):
		super(Call, self).__init__()
		self.unique_id = unique_id
		self.caller_name = caller_name
		self.caller_phone_number = caller_phone_number
		self.time_of_call = time_of_call
		self.reason_for_call = reason_for_call
	def display_call(self):
		print """
Unique id: {}
Caller name: {}
Call phone number: {}
Time of call: {}
Reason for call: {}
		""".format(self.unique_id, self.caller_name, self.caller_phone_number, self.time_of_call, self.reason_for_call)
################
call1 = Call(1,"steve",714,7, "too handsome")

call1.display_call()
#################
class CallCenter(object):
	"""docstring for CallCenter"""
	
	def __init__(self):
		# self.calls = calls
		self.queue_size = 0
		self.call_list =[1,2]
	def calls(self):
		for i in range(0, len(self.call_list)):
			print "*", self.call_list[i]
		return self
	def q_size(self):
		print self.queue_size
		return self
	def add_call(self):
		self.call_list.append("steve")
		self.queue_size += 1
		return self
	def remove_call(self):
		self.call_list.pop(0)
		self.queue_size -= 1
		return self


	# def display_call_list(self):
##########################
cc1 = CallCenter()
# cc1.calls()
# cc1.q_size()
# cc1.add_call(1).q_size()
cc1.remove_call().calls().q_size()


