#Multipes Part I
for odd_number in range(0,1000):
	if odd_number %2 != 0:
		print odd_number

#Multiples Part II
for five_number in range(5,1000001):
	if five_number %5 == 0:
		print five_number

#Sum List
a = [1,2,5,10,225,3]
sum = 0
for i in a:
	sum += i
	print sum

#Average List
print sum/len(a)

#multiples A
# for count in range(1, 1001, 2):
#     print count

#multiples B
# for count in range(5,1000001,5):
#     print count

#sum list
# my_numbers = [1, 2, 5, 10, 255, 3]
# sum = 0
# for i in my_numbers:
#     sum += i
# print sum

#average list
# print sum/len(my_numbers)