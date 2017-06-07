# WHILE

$i = 0
$num = 5
begin
	puts("Inside the loop i = #{$i}")
	$i +=1

	puts "$i is NOW 3" if $i == 3
	puts "$i is not 3" unless $i == 3
end while $i < $num

# FOR
for i in 0..5
	puts "Value of var is #{i}"
end	