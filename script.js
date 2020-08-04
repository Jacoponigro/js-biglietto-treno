// chiedere quanti chilometri percorrere
var distanza = prompt("quanti chilometri vuoi percorrere?");
// chiedere quanti anni ha il passeggero
var anni = prompt("quanti hanni hai?");
// calcolo prezzo per distanza
var prezzoDistanza = (distanza * 0.21);
// calcolo sconti
scontoVecchi = 0;
scontoMinorenni = 0;
if (anni < 18) {
  var scontoMinorenni = ((prezzoDistanza *20) / 100);
}
else if (anni > 65) {
  var scontoVecchi = ((prezzoDistanza *40) / 100);
}
console.log(scontoVecchi)
// calcolo prezzo biglietto
var prezzoBiglietto = (prezzoDistanza - scontoVecchi - scontoMinorenni).toFixed(2);
// stampa prezzo biglietto
document.getElementById('prezzo').innerHTML = prezzoBiglietto + " euro";
