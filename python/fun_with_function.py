# odd or even
# def oddeven():
# 	for num in range(1, 2001):
# 		if num % 2 == 0:
# 			oe= "even"
# 		else:
# 			oe= "odd"
# 		print "Number is", num, "This is an", oe, "number"
# oddeven()

# Multiply
a = [2,4,10,16]

def mut(arryo, numyo):
	for x in range(0, len(arryo)):
		arryo[x] = arryo[x] * numyo
	return arryo

print mut(a, 7)


# Hacker Challenge:
b = [1,2,3,4]

def to_one(arryo):
	print arryo
	narry = []
	for z in arryo:
		varr = []
		for x in range(0, z):
			varr.append(1)
		narry.append(varr)
	print narry
	return narry

to_one(mut(b,2))




# def layered_multiples(arr):
#     # print arr
#     new_array = []
#     for x in arr:
#         val_arr = []
#         for i in range(0,x):
#             val_arr.append(1)
#         new_array.append(val_arr)
#     print new_array
#     return new_array

# layered_multiples(mut([2,4,5],3))
