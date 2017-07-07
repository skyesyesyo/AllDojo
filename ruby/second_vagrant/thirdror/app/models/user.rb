class User < ActiveRecord::Base
  has_secure_password

  has_many :shoes
  has_many :histories
  has_many :sales, through: :histories, source: :shoe

  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :first_name, :last_name, presence: true
  validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
  validates :password, presence: true, on: :create

  before_save :email_lowercase

  def email_lowercase
    email.downcase!
  end
end
