# 1.Create 5 users
User.create(first_name: "Steve", last_name: "Jobs", email: "steve@jobs.com")
User.create(first_name: "Bill", last_name: "Gates", email: "bill@gates.com")
User.create(first_name: "Steve", last_name: "Kim", email: "steve@kim.com")
User.create(first_name: "Warren", last_name: "Buffet", email: "warren@buffet.com")
User.create(first_name: "Teresa", last_name: "Kwong", email: "teresa@kwong.com")
# 2. Create 5 blogs
Blog.create(name: "8004", description: "524352534")
Blog.create(name: "bitcoin?", description: "buy now yo")
Blog.create(name: "coinbase", description: "Good place to buy and sell but not keep")
Blog.create(name: "codingdojo", description: "harder than expected")
Blog.create(name: "Girl from vinus", description: "Boy from mars")

# 3. Have the first 3 blogs be owned by the first user
User.first.owners.create(blog: Blog.first)
Blog.find(2).owners.create(user: User.first)
Owner.create(user: User.first, blog: Blog.find(3))

# 4. Have the 4th blog you create be owned by the second user
Owner.create(blog: Blog.find(4), user:User.find(2))

# 5. Have the 5th blog you create be owned by the last user
Blog.find(5).owners.create(user: User.find(3))

# 6. Have the third user own all of the blogs that were created.
#### I think this is wrong
Blog.all.each { |blog| Owner.create(user: User.third, blog: blog) }

# 7. Have the first user create 3 posts for the blog with an id of 2. Remember that you shouldn't do Post.create(user: User.first, blog_id: 2) but more like Post.create(user: User.first, blog: Blog.find(2)). Again, you should never reference the foreign key in Rails.
1.upto(3) { |i| Post.create(title: "this is title #{i}", content: "content #{1}", user: User.find(1), blog: Blog.find(2)) }

# 8. Have the second user create 5 posts for the last Blog.
1.upto(5) { |i| Post.create(title: "#{i} by last", content: "#{i} by last content", user: User.find(2), blog: Blog.last)}

# 9. Have the 3rd user create several posts for different blogs.
1.upto(5) { |i| User.find(3).posts.create(blog: Blog.find(i))}

# 10. Have the 3rd user create 2 messages for the first post created and 3 messages for the second post created
Message.create(author: "mc", message: "window", user: User.third, post: Post.first)
Message.create(author: "apple", message: "mac", user: User.find(3), post: Post.find(1))
Message.create(author: "nba", message: "kobe", user: User.find(3), post: Post.find(2))
Message.create(author: "scoo", message: "hwy", user: User.find(3), post: Post.find(2))
Message.create(author: "try", message: "ohoh", user: User.find(3), post: Post.find(2))

# 11. Have the 4th user create 3 messages for the last post you created.
1.upto(3) { |i| Message.create(author: "#{i}", message: "#{i}message", user: User.find(4), post: Post.last)}
# 12. Change the owner of the 2nd post to the last user.
Post.find(2).update(user: User.last)

# 13. Change the 2nd post's content to be something else.
Post.find(2).update(content: "new")

# 14. Retrieve all blogs owned by the 3rd user (make this work by simply doing: User.find(3).blogs).
User.third.blogs

# 15. Retrieve all posts that were created by the 3rd user
User.third.posts

# 16. Retrieve all messages left by the 3rd user
User.third.messages

# 17. Retrieve all posts associated with the blog id 5 as well as who left these posts.
Post.joins(:user, :blog).where("blogs.id = ?", 5).select("*")

# 18. Retrieve all messages associated with the blog id 5 along with all the user information of those who left the messages

Message.joins(:user).where(post: Blog.find(5).posts).select("*")

# 19. Grab all user information of those that own the first blog (make this work by allowing Blog.first.owners to work).
Blog.first.users

# 20. Change it so that the first blog is no longer owned by the first user.
Owner.where("id = ? AND user_id = ?", 1, 1).update_all("user_id = 5")