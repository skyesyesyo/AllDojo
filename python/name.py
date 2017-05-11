# print users["Students"][0]['first_name']
# how to access inside of dictiontry 


# PART 1

# students = [
#      {'first_name':  'Michael', 'last_name' : 'Jordan'},
#      {'first_name' : 'John', 'last_name' : 'Rosales'},
#      {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#      {'first_name' : 'KB', 'last_name' : 'Tonel'}
# ]

# dict_students={}


# def print_students():
# 	for i in students:
# 		print i['first_name'], i['last_name']


# print_students()

# PART 2

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan', 'age': '34'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }




def print_user(users):
	for roleyo in users:
		counter = 0
		print roleyo
		for name in users[roleyo]:
			counter = counter + 1
			first_name = name['first_name']
			last_name = name['last_name']
			name_len = len(name['first_name']) + len(name['last_name'])
			print counter, name['first_name'], name['last_name'], name_len

print_user(users)






# def show_all(users):
#     for role in users:
#         counter = 0
#         print role
#         for person in users[role]:
#             counter += 1
#             first_name = person['first_name']
#             last_name = person['last_name']
#             length = len(person['first_name']) + len(person['last_name'])
#             print "{} - {} {} - {}".format(counter, person['first_name'], person['last_name'], length)

# show_all(users)




