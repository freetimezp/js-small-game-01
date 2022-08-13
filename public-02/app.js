let cardArray = [
    {
        name: 'cheeseburger',
        img: 'images/product-1.jpg',
    },
    {
        name: 'fries',
        img: 'images/product-2.jpg',
    },
    {
        name: 'hotdog',
        img: 'images/product-3.jpg',
    },
    {
        name: 'ice-cream',
        img: 'images/product-4.jpg',
    },
    {
        name: 'milkshake',
        img: 'images/product-5.jpg',
    },
    {
        name: 'pizza',
        img: 'images/product-6.jpg',
    },
    {
        name: 'cheeseburger',
        img: 'images/product-1.jpg',
    },
    {
        name: 'fries',
        img: 'images/product-2.jpg',
    },
    {
        name: 'hotdog',
        img: 'images/product-3.jpg',
    },
    {
        name: 'ice-cream',
        img: 'images/product-4.jpg',
    },
    {
        name: 'milkshake',
        img: 'images/product-5.jpg',
    },
    {
        name: 'pizza',
        img: 'images/product-6.jpg',
    },
];

let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];
let resultClick = 0;
let check = true;

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');

function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        //console.log(card);

        gridDisplay.append(card);
    }
}
createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img');
    let optionOneId = cardsChosenIds[0];
    let optionTwoId = cardsChosenIds[1];

    if(optionOneId == optionTwoId) {
        //alert("You click same card!");
        check = false;

        cards[optionOneId].setAttribute('src', 'images/blank.jpg');
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
        cardsChosen = [];
        cardsChosenIds = [];
    }

    if(check === true && (cardsChosen[0] == cardsChosen[1])) {
        //alert("You found match!");
        cards[optionOneId].setAttribute('src', 'images/white.jpg');
        cards[optionTwoId].setAttribute('src', 'images/white.jpg');

        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);

        cardsWon.push(cardsChosen);
    }else{
        cards[optionOneId].setAttribute('src', 'images/blank.jpg');
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
    }

    cardsChosen = [];
    cardsChosenIds = [];

    if(cardsWon.length == cardArray.length / 2) {
        resultDisplay.innerHTML = "You win by " + resultClick + " steps";
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    resultClick++;
    cardsChosen.push(cardArray[cardId].name);

    cardsChosenIds.push(cardId);

    this.setAttribute('src', cardArray[cardId].img);

    if(cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

























