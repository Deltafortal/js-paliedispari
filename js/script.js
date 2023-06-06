console.log('JS OK')



// Chiedi all'utente di inserire una parola

const word = prompt('Inserisci una parola e ti dirò se essa è palindroma').trim();
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

for (let i = reverse.length -1; i > -1; i--) {

    reversed += reverse[i];
}

console.log(reversed); 


// COntrolla che le due parole siano uguali

alert('La tua parola al contrario è : ' + reversed);

if (word === reversed) {
    alert('La tua parola è Palindroma')
}
else {
    alert('La tua parola non è palindroma')
}