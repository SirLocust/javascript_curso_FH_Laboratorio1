let deck = [];
let scorePlayer = 0
const typeCarts = ["C", "D", "H", "S"];
const specialCarts = ["A", "J", "Q", "K"];
const playerDeck = document.getElementById("jugador-cartas");
const createDeck = () => {
  deck = []  
  for (let i = 2; i <= 10; i++) {
    for (let typeCart of typeCarts) {
      deck.push(i + typeCart);
    }
  }

  for (let typeCart of typeCarts) {
    for (let specialCart of specialCarts) {
      deck.push(specialCart + typeCart);
    }
  }

//   deck = _.shuffle(deck);
};

const addCart = () => {
  //    const newCart = document.createElement('img').setAttribute('class','carta');
  if(deck.length >0){

      const posCart = genereteCardPos();
      const cart = deck[posCart];
      valueCart(cart)
      deck.splice(posCart, 1);
      playerDeck.innerHTML += `<img class="carta" src="/assets/cartas/${cart}.png" alt=""></img>`;
      return;
  }
  console.log("no hay mas cartas")

};

const buttonGiveCart = () => {
  const button = document.getElementById("giveCart");
  button.addEventListener("click", () => {
    addCart();
  });
};

const newGame = () => {
  const button = document.getElementById("newGame");
  button.addEventListener("click", () => {
    console.log("go");
    document.querySelectorAll(".carta").forEach((e) => {
      e.remove();
    });
    startGame();
  });
};



const valueCart =( cart) =>{

    const value = cart.substring(0, cart.length-1)
    // console.log(parseInt(value,10) );
    if( !isNaN(value)){
        scorePlayer += parseInt(value,10)
        
    }else {
        
        scorePlayer += (value === 'A')?11:10
    }
    
    document.getElementById('playerScore').textContent = scorePlayer    
    
}




const startGame = () => {
  createDeck();
  buttonGiveCart();
};

newGame();

const genereteCardPos = () => {
  return Math.floor(Math.random() * (deck.length - 0) + 0);
};

console.table(deck);
