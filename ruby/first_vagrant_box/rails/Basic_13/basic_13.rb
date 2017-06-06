# # 1. Print 1-255
# (1..255).each {|i| puts i}

# # 2. Print odd numbers between 1-255
# (1..255).each {|i| puts i if i.odd?}

# # 3. Print Sum
# sum = 0
# (0..255).each {|i| puts "New Number: #{i} Sum: #{sum += i}"}

# # 4. Iterating through an array
# x = [1,3,5,7,9,13]
# x.each {|i| puts i}

# # 5. Find Max
# puts [-3,-5,-7].max

# # 6. Get Average
# array = [2,10,3]
# puts array.reduce(:+) / array.length.to_f
# puts array.reduce(:+).to_f / array.size

# # 7. Array with Odd Numbers
# odd_array = []
# (1..255).each {|i| odd_array << i if i.odd?}
# puts odd_array.to_s

# # 8. Greater Than Y
# arr = [1,3,5,7]
# Y= 3
# puts arr.count {|i| i > Y}

# # 9. Square the values
# arr = [1,5,10,-2]
# puts arr.map! {|i| i**2}

# # 10. Eliminate Negative Numbers
# arr = [1, 5, 10, -2]
# puts arr.each_index {|i| arr[i] = 0 if arr[i] < 0}

# # 11. Max, Min, and Average
# arr = [1, 5, 10, -2]
# max_min_ave = { max: arr.max, min: arr.min, average: arr.reduce(:+) / arr.length.to_f}
# puts max_min_ave

# # 12. Shifting the Values in the Array
# x = [1,5,10,7,-2]
# x.rotate!(1)[x.length-1] = 0
# puts x

# 13. Number to String
x = [-1,-3,2]
puts x.each_index {|i| x[i] = "Dojo" if x[i]<0}