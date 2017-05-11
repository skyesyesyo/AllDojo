weekend = {"sun":"sunday"}
print weekend
capitals={}
capitals["svk"]="Bratislava"

capitals['deu']='Berlin'
capitals['dnk']='Copenhagen'
print capitals

#loop to print all keys
for dataxhaha in capitals:
	print dataxhaha

#another way to print all keys
for key in capitals.iterkeys():
     print key
#to print the values
for val in capitals.itervalues():
     print val
#to print all keys and values
for key,data in capitals.iteritems():
     print key, " = ", data

print capitals.keys()
print capitals.items()


context = {
  'questions': [
   { 'id': 1, 'content': 'Why is there a light in the fridge and not in the freezer?'},
   { 'id': 2, 'content': 'Why don\'t sheep shrink when it rains?'},
   { 'id': 3, 'content': 'Why are they called apartments when they are all stuck together?'},
   { 'id': 4, 'content': 'Why do cars drive on the parkway and park on the driveway?'}
  ]
 }

for key, data in context.items():
     #print data
     for value in data:
          print "Question #", value["id"], ": ", value["content"]
          print "----"


# Dictionary -> List
data ={"house":"Haus","cat":"Katze","red":"rot"}
print data.items()
#[('house', 'Haus'), ('red', 'rot'), ('cat', 'Katze')]
print data.keys()
#['house', 'red', 'cat']
print data.values()
#['Haus', 'rot', 'Katze']

# List -> Dictionary
dishes = ["pizza", "sauerkraut", "paella", "hamburger"]
countries = ["Italy", "Germany", "Spain", "USA"]

foodyoyo = zip(countries, dishes)
print foodyoyo

foodyodic = dict(foodyoyo)
print foodyodic