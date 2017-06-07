require_relative "mammal"

class Lion < Mammal
  def initialize
    @health = 170
  end

  def fly num=1
    @health -= 10*num
    self
  end

  def attack_town num=1
    @health -= 50*num
    self
  end

  def eat_humans num=1
    @health += 20*num
    self
  end

  def display_health
    puts "*" *30
    puts "THIS IS A LION"
    super
    puts "$" *30
  end
end

simba = Lion.new

simba.attack_town(3).eat_humans(2).fly(2).display_health


