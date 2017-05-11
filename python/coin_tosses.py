# x = .23945593
# y = .798839238
# x_rounded = round(x)
# # x_rounded will be rounded down to 0
# y_rounded = round(y)
# # y_rounded will be rounded up to 1
# print x_rounded
# print y_rounded
import random

def coin_toss(num_of_toss):
	print "Start the program..."
	num =0
	ht = ""
	hc = 0
	tc = 0
	for coin in range(0, num_of_toss):
		coin = round(random.random())
		if coin == 0:
			ht = "head"
			hc = hc +1
		else:
			ht = "tail"
			tc = tc +1
		num = num +1
		print "Attempt #", num, "Throwing a coin... It's a", ht, "... Got ",hc, "head(s) so far and", tc,"tail(s) so far"

	print "Ending the program, thank you!"

coin_toss(5000)



# import random

# def toss(reps):
#     # print new_toss
#     attempt_count = 1
#     head_count = 0
#     tail_count = 0
#     result = ""
#     result_string_complete = ""

#     for x in range(1, reps):
#         new_toss = random.randint(0,1)
#         if new_toss == 1:
#             head_count += 1
#             result = "head"
#             print "Attempt #", attempt_count, ": Throwing a coin... It's a ", result, "! Got ", head_count, "head(s) so far and", tail_count, "tail(s) so far"
#         else:
#             tail_count += 1
#             result = "tail"
#             print "Attempt #", attempt_count, ": Throwing a coin... It's a ", result, "! Got ", head_count, "head(s) so far and", tail_count, "tail(s) so far"
#         attempt_count += 1

# toss(5001)