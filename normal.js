const myImages = [
    'magus.gif',
    'boszi.gif',
    'sarkany.gif',
    'pegasus.gif',
    'phoneix.gif',
];

let myCards = ['magus.gif', 'magus.gif', 'boszi.gif','boszi.gif', 'sarkany.gif', 'sarkany.gif', 'pegasus.gif', 'pegasus.gif', 'phoneix.gif', 'phoneix.gif'];
myCards = shuffle(myCards);

let flippedMyCards = [];
let matchedMyCards = [];

function myShuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

function createMyGameBoard() {

    const myGameBoard = document.getElementById('game-board2');

    for (let i = 0; i < myCards.length; i++) {
        const myCard = document.createElement('div');
        myCard.classList.add('card');
        const myImg = document.createElement('img');
        myImg.src = 'images/hatlap.webp';
        myImg.classList.add('hidden2');
        myCard.appendChild(myImg);

        myCard.dataset.value = myCards[i];
        myCard.addEventListener('click', flipMyCard);
        myGameBoard.appendChild(myCard);
    }
}

function flipMyCard() {
    const myCard = this;
    const myImg = myCard.querySelector('img');

    if (flippedMyCards.length < 2 && !flippedMyCards.includes(myCard)) {
        myImg.src = 'images/' + myCard.dataset.value;
        flippedMyCards.push(myCard);

        if (flippedMyCards.length === 2) {
            setTimeout(checkMyMatch, 1000);
        }
    }
}

function checkMyMatch() {
    const [myCard1, myCard2] = flippedMyCards;
    const myImg1 = myCard1.querySelector('img');
    const myImg2 = myCard2.querySelector('img');

    if (myCard1.dataset.value === myCard2.dataset.value) {
        matchedMyCards.push(myCard1, myCard2);
        if (matchedMyCards.length === myCards.length) {
            document.getElementById("endtext").style.display = 'block'
            document.getElementById("game-board2").style.display = 'none'
            document.getElementById("gomb").style.display = 'none'
            document.getElementById("choose").style.display = 'none'
            document.getElementsByTagName('h2')[0].style.display = 'none'
            document.querySelector(".body").style.backgroundImage = "url('images/asztal2.jpg')"

        }
    } else {
        myImg1.src = 'images/hatlap.webp';
        myImg2.src = 'images/hatlap.webp';
    }

    flippedMyCards = [];
}

createMyGameBoard();
