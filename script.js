
function Enter(event){
    if(event.key == 'Enter'){
        window.location.reload();
    }
}

function valasztas(){
    modvalasztas = mod.value
    if (modvalasztas == 'normal'){
        document.querySelector("#game-board").style.display = "none"
        document.querySelector("#game-board2").style.display = "block"

    }
     else if (modvalasztas == 'jedlik'){
        document.querySelector("#gomb").style.display = "block"
        document.querySelector("#game-board").style.display = "block"
        document.querySelector("#game-board2").style.display = "none"
        document.querySelector(".body").style.backgroundImage = "url('images/jedlikhatter.jpg')"
        const cards = document.querySelectorAll(".card");
        for (let index = 0; index < cards.length; index++) {
            cards[index].style.border = 'solid 1px blue'
            
        }

        const cim = document.getElementsByTagName('h1')[0];
        cim.style.backgroundColor = 'rgba(5, 31, 149, 0.83)';

        document.querySelector("#myBtn").style.backgroundColor = "rgba(12, 45, 191, 1)"
        document.querySelector("#myBtn").style.marginTop = "2%"
        document.querySelector("#choose").style.backgroundColor = "rgba(12, 45, 191, 1)"
        document.querySelector("#mod").style.backgroundColor = "rgba(12, 45, 191, 1)"
        document.querySelector("#choose").style.marginTop = "2%"


        
     }

     else if (modvalasztas == 'valasztas'){
        document.querySelector("#myBtn").style.backgroundColor = "green";
     }
    
    
}

window.addEventListener('keydown', Enter);