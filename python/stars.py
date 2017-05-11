# Part 1
x = [4, 6, 1, 3, 5, 7, 25]
y = [2,4,2,4]

def star1(arryo):
	for i in arryo:
		print "*" * i

# star1(y)


# Part 2

z = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
def star_ns(arryoyo):
	for i in arryoyo:
		if type(i) is int:
			print "*" * i
		else:
			length = len(i)
			ns = i[0].lower()
			print ns * length
star_ns(z)




# def stars2(arr):
#     for x in arr:
#         if isinstance(x, int):
#             print "*" * x
#         elif isinstance(x, str):
#             length = len(x)
#             letter = x[0].lower()
#             print letter * length

# x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
# stars2(x)