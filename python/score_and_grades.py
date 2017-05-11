import random
random_num = random.random()
print random_num
random_num = random.randint(0,1)
print random_num





def grade(num_of_student):
	print "Scores and Grades"
	
	for g in range(0, num_of_student):
		g = random.randint(60,100)
		if g >= 60 and g <70:
			letter = "D"
		elif g >= 70 and g < 80:
			letter = "C"
		elif g>=80 and g <90:
			letter = "B"
		else:
			letter ="A"
		print "score:", g,"; Your grade is", letter

	print "End of the program. Bye!"

grade(5)

# import random

# def grade(reps):
#     print "Scores and Grades"
#     for x in range(0, reps):
#         score = random.randint(60, 101)
#         if score >= 60 and score <= 69:
#             print "Score: ", score,"; Your grade is D"
#         elif score >= 70 and score <= 79:
#             print "Score: ", score, "; Your grade is C"
#         elif score >= 80 and score <= 89:
#             print "Score: ", score, "; Your grade is B"
#         elif score >= 90 and score <= 100:
#             print "Score: ", score, "; Your grade is A"
#         else:
#             print "You failed"
#     print "End of the program.  Bye!"

# grade(10)