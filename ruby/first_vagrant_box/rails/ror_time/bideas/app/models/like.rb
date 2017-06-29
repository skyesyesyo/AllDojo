class Like < ActiveRecord::Base
  belongs_to :user
  belongs_to :brightidea

  has_many :users_brightidea, through: :brightideas, source: :user

end
