#input
one = ['magical unicorns',19,'hello',98.98,'world']
#output
"The array you entered is of mixed type"
"String: magical unicorns hello world"
"Sum: 117.98"

# input
two = [2,3,1,7,4,12]
#output
"The array you entered is of integer type"
"Sum: 29"

# input
three = ['magical','unicorns']
#output
"The array you entered is of string type"
"String: magical unicorns"


def typelist(somelist):
	sum = 0
	string = ""
	for value in somelist:
		if type(value) is int or type(value) is float:
			sum = sum + value
		elif type(value) is str:
			string = string+value+" "
	if(sum>0 and string != ""):
		print "The array you entered is mixed type"
	elif(sum>0 and string == ""):
		print "The array you entered is of integer type"
	elif(sum==0 and string !=""):
		print "The array you entered is of string type"
	print "String: {}".format(string)
	if sum != 0:
		print "Sum: {}".format(sum)


typelist(one)
typelist(two)
typelist(three)