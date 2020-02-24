
var pariDispari = prompt("Scegli pari o dispari").toLowerCase();
if (pariDispari.toLowerCase().includes("pari", "dispari")) {

} else {
  while (!(pariDispari.toLowerCase().includes("pari", "dispari"))) {
    var pariDispari = prompt("Devi scegliere o pari o dispari").toLowerCase();
  }
}
console.log("Hai scelto " + pariDispari);

var numeroUtente = parseInt(prompt("Scegli un numero da 1 a 10"))
if ((numeroUtente > 1) && (numeroUtente < 10)) {

} else {
  while ((numeroUtente < 1) || (numeroUtente > 10)) {
    var numeroUtente = parseInt(prompt("Devi scegliere un numero compreso tra 1 e 10"));
  }
}
console.log("Hai scelto il numero " + numeroUtente);



// var pariDispari = prompt("Scegli pari o dispari").toLowerCase();
// if (!(pariDispari.toLowerCase().includes("pari", "dispari"))) {
//   while (!(pariDispari.toLowerCase().includes("pari", "dispari"))) {
//     var pariDispari = prompt("Devi scegliere o pari o dispari").toLowerCase();
//   }
// }
// console.log("Hai scelto " + pariDispari);
//
// var numeroUtente = parseInt(prompt("Scegli un numero da 1 a 10"))
// if ((numeroUtente < 1) || (numeroUtente > 10)) {
//   while ((numeroUtente < 1) || (numeroUtente > 10)) {
//     var numeroUtente = parseInt(prompt("Devi scegliere un numero compreso tra 1 e 10"));
//   }
// }
// if (isNaN(numeroUtente) == true) {
//   while (isNaN(numeroUtente) == true) {
//     var numeroUtente = parseInt(prompt("Devi inserire un numero"));
//   }
// }
// console.log("Hai scelto il numero " + numeroUtente);




var numeroRandom = generaRandomMinMax(1, 10);
console.log("Il numero generato automaticamente è " + numeroRandom);

var somma = numeroUtente + numeroRandom;
console.log("La somma del tuo numero e di quello generato automaticamente è " + somma);

if ((((somma % 2) == 0) && pariDispari == "pari") || (((somma % 2) == 1) && pariDispari == "dispari")) {
  console.log("La somma dei due numeri è " + pariDispari + " quindi hai vinto!!");
} else {
  console.log("La somma dei due numeri non è " + pariDispari + " quindi hai perso..");
}




function generaRandomMinMax(min, max) { // funzione che genera un numero random tra due valori dati in ingresso MIN e MAX, estremi inclusi
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
