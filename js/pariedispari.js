
// Chiedi all'utente se vuole pari o dispari

let playerEven = false;
const evenOrOdd = prompt('pari o dispari?').trim();
console.log(evenOrOdd);


if (evenOrOdd === 'pari') {

    playerEven = true;
}




// Chiedi all'utente un numero da 1 a 5

const playerNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log(playerNumber);





// # VALIDAZIONE

isValid = true;

if (playerNumber > 5 || playerNumber < 1) {
    alert('I numeri inseriti non sono validi');
    isValid = false;
}

if (isValid = true) { 

    
    // LOGICA PRINCIPAE ---------------------------------------------------------
    
    
    
    // Crea una funzione che generi un numero casuale
    
    function numGenerator() {
        
        const cpuNum = Math.floor(Math.random() * 5 + 1);
        return cpuNum;
    }
    
    
    const cpuNum = numGenerator();
    alert('Il numero della CPU è : ' + cpuNum);




    //Somma i numeri
    const tot = cpuNum + playerNumber;
    alert('Il totale è : ' + tot);




    // Crea una funzione che verifichi se il totale è pari

    function isEven() {
        
        let isEven = false;
        
        if (tot % 2 === 0) {
            
            isEven = true;
        }
        
        return isEven;
    }



    // Comunica la risposta

    const even = isEven();

    if (even === playerEven) {
        alert('Congratulazioni, hai vinto!');
    }
    else {
        alert('Mi dispiace, ha vinto la CPU');
    }


}