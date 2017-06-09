class User < ActiveRecord::Base
	has_many :messages
	########### or
	# def messages
	# 	User.find_by_sql("SELECT * FROM messages WHERE messages.user_id = #{self.id}")
	# end

end
