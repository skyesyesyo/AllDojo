def varargs(arg1, *args):
	print "Got " + arg1 + " and "+ ", ".join(args)
varargs("one")	# output: "Got one and"
varargs("one", "two")
varargs("one", "two", "three")
varargs("one", "two", "three", "four")
#################

def varargs2(arg1, *args):
	print "args is of " + str(type(args))
varargs2("one", "two", "three") 