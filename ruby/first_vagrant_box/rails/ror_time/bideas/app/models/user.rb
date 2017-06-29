class User < ActiveRecord::Base
  has_secure_password

  has_many :brightideas
  has_many :likes_brightidea, through: :likes, source: :brightidea

  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :name, :alias, presence: true
  validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
  validates :password, presence: true, on: :create, length: { minimum: 8 }

  before_save :email_lowercase

  def email_lowercase
    email.downcase!
  end

end
