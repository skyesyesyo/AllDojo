x = "CodingDojo"

puts x.length
# Return 10
puts x.class
# Return String
puts x.capitalize
# Return Codingdojo
puts x.upcase
# Return CODINGDOJO
puts x.downcase
# Return codingdojo

# Looking for index 2
puts x[2]
# Return d

# YOU WILL USE THIS A LOT
# case sensitive
puts x.include?("dojo")
# Return false
puts x.include?("Dojo")
# Return true
# example of use case
puts "This word has the word 'Dojo'" if x.include? "Dojo"
# Return This word has the word 'Dojo'

a = "john, charles, matt, joe"

puts a.split(",")
# It will return array.
# ["john", "charles", "matt", "joe"]

y = ""

puts "Y is empty" if y.empty?
# Return Y is empty

name = "steve"
puts name
# Return steve
puts name.capitalize!
# Return Steve
puts name
# Return Steve

########
# In Ruby string is mutable
str = "bar"
str[0] = "c"
puts str
# "car"