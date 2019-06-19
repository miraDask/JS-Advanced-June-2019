function cardFactory(face, suit) {
    const SUITS = {
        S : '\u2660',
        H : '\u2665',
        D : '\u2666',
        C : '\u2663'
    }

    const FACES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'] ;
   
    if(!SUITS.hasOwnProperty(suit) || !FACES.includes(face)){
        throw new Error('Error');
    }
 
    return {
        face,
        suit : SUITS[suit],
        toString : function() {
            return `${this.face}${this.suit}`;
        }
    }
}

// let card = cardFactory('2', 'D');
// console.log(card.toString());
