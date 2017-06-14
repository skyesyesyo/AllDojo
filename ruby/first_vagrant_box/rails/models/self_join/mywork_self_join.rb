# User table
rails g model User first_name:string last_name:string

# friendships table

rails g model Friendship user_id:integer firend_id:integer

# creating users
1.upto(5) { |i| User.create(first_name: "#{i} is my f_name", last_name: "#{i} is my l_name")}

# creating friendships
Friendship.create(user: User.first, friend: User.last)
Friendship.create(user: User.find(4), friend: User.find(2))
Friendship.create(user: User.find(3), friend: User.find(5))

# retrieving the friends of the first user
User.first.friends

# Find out how you can retrieve all users who are NOT a friend with the first User.
?
# This didn't work 
User.except(User.first.friends)


User.where.not(id: User.first.firends.select('id'))