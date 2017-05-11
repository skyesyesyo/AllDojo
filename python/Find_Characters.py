# input
l = ['hello','world','my','name','is','Anna']
char = 'o'
# output
n = ['hello','world']


n =[]

for value in l:
	if char in value:
		n.append(value)

print n
