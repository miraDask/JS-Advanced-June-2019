function printDeckOfCards(cards) {
    function cardFactory(face, suit) {
        const SUITS = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        }

        const FACES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        if (!SUITS.hasOwnProperty(suit) || !FACES.includes(face)) {
            throw new Error(`Invalid card: ${face}${suit}`);
        }

        return {
            face,
            suit: SUITS[suit],
            toString: function () {
                return `${this.face}${this.suit}`;
            }
        }
    }
    let deck = [];
    try {
        cards.forEach(cardData => {
            const suit = cardData.slice(-1);
            const face = cardData.substring(0, cardData.length - 1);
            const card = cardFactory(face, suit);
            deck.push(card);
        });

        console.log(deck.join(' '));
    } catch (error) {
        console.log(error.message);
    }
}
// tests:
// printDeckOfCards(['5S', '3D', 'QD', '1C']);
// printDeckOfCards(['AS', '10D', 'KH', '2C']);