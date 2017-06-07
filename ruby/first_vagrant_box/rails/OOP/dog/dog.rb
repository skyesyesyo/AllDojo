# Require_relative is not case sensitive
require_relative "Mammal"


class Dog < Mammal
  # Class name is case sensitive
  def pet
    @health = @health + 5
    self
  end

  def walk
    @health -= 1
    self
  end

  def run
    @health -= 10
    self
  end
end

cici = Dog.new

cici.display_health
cici.walk.walk.walk.run.run.pet.display_health



# d = Dog.new
# d.display_health
# d.walk.walk.walk.run.run.pet.display_health

