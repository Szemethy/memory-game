// Függvény a tömb elemek véletlenszerű keverésére Fisher-Yates algoritmussal
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }
  
//   // Kártyák inicializálása és keverése
//   const cards = [document.querySelectorAll('.card')];
//   shuffleArray(Array.from(cards));
  
//   // Most a 'cards' tömb tartalmazza a kevert kártyákat
//   const container = document.body;
//   cards.forEach(card => container.appendChild(card));


  //-------------------------------------------------------------------------------------------

  function keyDownEventListener(event){
    if (event.key == 'ArrowDown'){
        document.querySelector(".img").style.display = "block";
    }
  }

window.addEventListener('keydown', keyDownEventListener);
  