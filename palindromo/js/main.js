var parolaUtente = prompt("Inserisci una parola e scopri se è palindroma");
console.log(parolaUtente);

if (isNaN(parolaUtente)) {
  var parolaUtenteDuplicata = parolaUtente.slice();
  var parRev = palindrome(parolaUtenteDuplicata);
  console.log(parRev);
  if (parolaUtente == parRev) {
    console.log("La tua parola è un palindromo!");
  } else {
    console.log("La tua parola non è un palindromo");
  }


} else {
  console.log("Devi inserire una parola");
}


function palindrome(str) {
  return str = str.split('').reverse().join('');
}
