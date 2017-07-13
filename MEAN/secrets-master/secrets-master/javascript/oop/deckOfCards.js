class Card{
	constructor(suit, value){
		this.suit = suit;
		this.value = value;
	}
}

class Deck{
	constructor(){
		this.cards = [];
		this.buildDeck();
	}

	buildDeck(){
		var suits = ['spades', 'hearts', 'diamonds', 'clovers'];
		var values = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
		for(let suit in suits){
			for(let value in values){
				this.cards.push(new Card(suits[suit], values[value]))
			}
		}
	}

	shuffle() {
	  let m = this.cards.length, t, i;
	  // While there remain elements to shuffle…
	  while (m) {
	    // Pick a remaining element…
	    i = Math.floor(Math.random() * m--);
	    // And swap it with the current element.
	    t = this.cards[m];
	    this.cards[m] = this.cards[i];
	    this.cards[i] = t;
	  }
	}

	reset(){
		this.cards = [];
		this.buildDeck();
	}

	deal(){
		let idx = Math.floor(Math.random() * this.cards.length);
		let delt = this.cards[idx];
		this.cards.splice(idx, 1);
		return delt;
	}

}

var deck = new Deck();
// console.log(deck);
deck.shuffle();
// console.log(deck);
// console.log(deck.deal());
// console.log(deck.deal());
// console.log(deck.deal());
// console.log("the number of cards left is", deck.cards.length);

class Player{
	constructor(name){
		this.name = name;
		this.hand = [];
	}

	draw(card){
		this.hand.push(card);
	}

	discard(idx){
		this.hand.splice(idx, 1);
	}
}

var bob = new Player('Bob');
bob.draw(deck.deal());
bob.draw(deck.deal());
bob.draw(deck.deal());
console.log("Bobs hand is", bob.hand);
bob.discard(0);
console.log("Bobs hand is", bob.hand);
