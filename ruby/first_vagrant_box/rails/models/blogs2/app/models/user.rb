class User < ActiveRecord::Base
	EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
	has_many :owners
	has_many :messages
	has_many :posts

	# 
	has_many :blogs, through: :owners

	validates :first_name, :last_name, :email, presence: true
	validates :first_name, length: { minimum: 2 }
	validates :last_name, length: { minimum: 1 }
end
