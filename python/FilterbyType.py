#Integer
# i = 99
# if i >=100:
# 	print "That's a big number!"
# else:
# 	print "That's a small number"

#String
# str = "I'm at coding dojo! howsjldkaljfuajkdjflkajldjfljdadfjlkdjaljfldjslkfjlakjdlfkjldksjalfjldjfljaljfldkjalkjfldjflkjaljfldkjfljdlakfjljdljflajdjlfjdlakjlfjaldjflajlk"
# if len(str)>=50:
# 	print "Long sentence."
# else:
# 	print "Short sentence."

#List
sI = 45
mI = 100
bI = 455
eI = 0
spI = -23
sS = "Rubber baby buggy bumpers"
mS = "Experience is simply the name we give our mistakes"
bS = "Tell me and I forget. Teach me and I remember. Involve me and I learn."
eS = ""
aL = [1,7,4,21]
mL = [3,5,7,34,3,2,113,65,8,89]
lL = [4,34,22,68,9,13,3,5,7,9,2,12,45,923]
eL = []
spL = ['name','address','phone number','social security number']

def filter(x):
	if type(x)==int:
		if x>=100:
			print "That's a big number!"
		else:
			print "That's a small number"
	elif type(x)==str:
		if len(x)>=50:
			print "Long sentence."
		else:
			print "Short sentence."
	else:
		if len(x)>=10:
			print "Big list"
		else:
			print "Short list"

filter(sI)
filter(mI)
filter(bI)
filter(eI)
filter(spI)
filter(sS)
filter(mS)
filter(bS)
filter(eS)
filter(aL)
filter(mL)
filter(lL)
filter(eL)
filter(spL)