


let deck = [];
const typeCarts= ['C','D','H','S']
const specialCarts = ['A','J','Q','K']

const createDeck= () => {

    for( let i =2 ; i<= 10 ; i++){
        for( let typeCart of typeCarts){
            deck.push(i+typeCart)
        }
    }

    for( let typeCart of typeCarts){
        for(let specialCart of specialCarts){
            deck.push(specialCart + typeCart)
        }
    }

    deck = _.shuffle(deck)
}


createDeck()
console.table(deck)