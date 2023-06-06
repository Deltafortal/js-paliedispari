console.log('JS OK')



// Chiedi all'utente di inserire una parola

const word = prompt('Inserisci una parola e ti dirò se essa è palidroma').trim();
console.log (word);




// Creo una funziona per stabilire se la parola è palidroma

function isPalindrome() {

    const reverse = word.split('');
    return reverse;
}

let reversed = '';
const reverse = isPalindrome();
console.log(reverse);


// Inverti l'ordine degli elementi

for (let i = reverse; i < 1; i--) {

    console.log(i);
    reversed += reverse[i];
}

console.log(reversed); 


