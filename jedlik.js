const images = [
    'kep1.jpg',
    'kep2.jpg',
    'kep3.jpg',
    'kep4.jpg',
    'kep5.jpg',

]

let cards = ['kep1.jpg','kep1.jpg','kep2.jpg','kep2.jpg','kep3.jpg','kep3.jpg', 'kep4.jpg','kep4.jpg', 'kep5.jpg','kep5.jpg'];
cards = shuffle(cards);

let flippedCards = [];
let matchedCards = [];

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

function createGameBoard() {

    const gameBoard = document.getElementById('game-board');

    for (let i = 0; i < cards.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        const img = document.createElement('img');
        img.src = 'images/modos.webp';
        img.classList.add('hidden');
        card.appendChild(img);

        card.dataset.value = cards[i];
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    }
}

function flipCard() {
    const card = this;
    const img = card.querySelector('img');

    if (flippedCards.length < 2 && !flippedCards.includes(card)) {
        img.src = 'images/' + card.dataset.value;
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    const img1 = card1.querySelector('img');
    const img2 = card2.querySelector('img');

    if (card1.dataset.value === card2.dataset.value) {
        matchedCards.push(card1, card2);
        if (matchedCards.length === cards.length) {
            alert('Gratulálok! Nyertél!');
        }
    } else {
        img1.src = 'images/modos.webp';
        img2.src = 'images/modos.webp';
    }

    flippedCards = [];
}



createGameBoard();
