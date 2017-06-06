def guess_number guess
	number = 25
	# puts "Your guess is low  Go higher friend" if guess < number
	# puts "You are genius" if guess == number
	# puts "You guess too high!  Go lower fatty" if guess > number
#######
	if guess == number
		return "You got it!"
	elsif guess > number
		return "Guess was too high!"
	else
		return "Guess was too low!"
	end
end

puts guess_number 25