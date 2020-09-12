let deck = [];
let scorePlayer = 0;
let scoreComputer = 0;
const typeCarts = ["C", "D", "H", "S"];
const specialCarts = ["A", "J", "Q", "K"];
let whichPlayerGame= 'player'
const buttonGiveCart = document.getElementById("giveCart");
const playerDeck = document.getElementById("jugador-cartas");
const computerDeck = document.querySelector('#computadora-cartas')
const uiScorePlayer = document.querySelector("#playerScore")
const uiScoreComputer= document.querySelectorAll('small')[1]
const buttonstopGiveCarts = document.querySelector('#stopCarts')
let  stopGiveCarts = false
const createDeck = () => {
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

const addCart = (cart, whichPlayer) => {
  //    const newCart = document.createElement('img').setAttribute('class','carta');

  if (deck.length) {
    valueCart(cart,whichPlayer);
    if(whichPlayer === 'player'){

      playerDeck.innerHTML += `<img class="carta" src="/assets/cartas/${cart}.png" alt=""></img>`;
      if(scorePlayer > 21  ){
        alert('perdieste')
        // buttonGiveCart.setAttribute('disabled','')
       callTurnComputer()
      }
      
      console.log("no hay mas cartas");
      return;
    }
    if(whichPlayer === "computer"){
      computerDeck.innerHTML += `<img class="carta" src="/assets/cartas/${cart}.png" alt=""></img>`;
    }

    
  }
};

buttonstopGiveCarts.addEventListener('click', () => {
  callTurnComputer()
})

const  callTurnComputer = () => {
  whichPlayerGame = 'computer'
  gameComputer()
  buttonGiveCart.toggleAttribute('disabled')
} 

const giveCart = () => {
  const posCart = genereteCardPos();
  const cart = deck[posCart];
  deck.splice(posCart, 1);
  return cart;
};

buttonGiveCart.addEventListener("click", () => {
  const cart = giveCart()   
  addCart(cart, whichPlayerGame);
});

const newGame = () => {
  const button = document.getElementById("newGame");
  button.addEventListener("click", () => {
    if(scorePlayer != 0){
      buttonGiveCart.toggleAttribute('disabled')
    }
    scorePlayer = 0;
    scoreComputer = 0;
    whichPlayerGame='player'
    deck = [];
    refreshScorePlayer(scorePlayer,whichPlayerGame);
    document.querySelectorAll(".carta").forEach((e) => {
      e.remove();
    });
    startGame();
  });
};

const valueCart = (cart , whichPlayer) => {
  const value = cart.substring(0, cart.length - 1);

  if(whichPlayer === "player"){

    scorePlayer += !isNaN(value) ? parseInt(value, 10) : value === "A" ? 11 : 10;
    refreshScorePlayer(scorePlayer , whichPlayer);
    return
  }
  if(whichPlayer === 'computer'){
    scoreComputer += !isNaN(value) ? parseInt(value, 10) : value === "A" ? 11 : 10;
    refreshScorePlayer(scoreComputer, whichPlayer);
    return
  }

};

const refreshScorePlayer = (score, whichPlayer) => {
 
  if(whichPlayer === "player"){

    uiScorePlayer.textContent = score;
    return
  }
  if(whichPlayer === 'computer'){
    uiScoreComputer.textContent = score
    return
  }
};

const startGame = () => {
  createDeck();
};

const genereteCardPos = () => {
  return Math.floor(Math.random() * (deck.length - 0) + 0);
};

const gameComputer =() =>{
  while(scoreComputer <= scorePlayer && scoreComputer <= 21){
    const cart = giveCart() 
    addCart(cart, whichPlayerGame)
  }
}

newGame();
