function lottery(coins, limit, winAmount){

	var win = 1;

	for(var i = coins; i > 0; i--){
		var chance =  Math.floor(Math.random() * 100) +1;
		if(chance === win){
			var winnings = (Math.floor(Math.random() * 50) +50);

			return "You won: " + winnings + " You have: " + i + " quaters left";
		}
	}
	return "You are out of quarters";
}