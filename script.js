
function Enter(event){
    if(event.key == 'Enter'){
        window.location.reload();
    }
}

function valasztas(){
    modvalasztas = mod.value
    if (modvalasztas == 'normal'){
        document.querySelector("#game-board").style.display = "none"
    }
    
}

window.addEventListener('keydown', Enter);