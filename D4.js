/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log("esercizio 1");

function area(l1, l2) {
  return l1 * l2;
}
console.log(area(2, 5));
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

console.log("esercizio 2");
function crazySum(n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  } else {
    return n1 + n2;
  }
}
console.log(crazySum(2, 5));
console.log(crazySum(10, 10));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
console.log("esercizio 3");

function crazyDiff(x) {
  let differenza = x - 19;
  if (differenza < 0) {
    differenza = -differenza;
  }
  if (x > 19) {
    return differenza * 3;
  } else {
    return differenza;
  }
}
console.log(crazyDiff(20));
console.log(crazyDiff(19));
console.log(crazyDiff(1));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
console.log("esercizio 4");
function boundary(Y) {
  return (Y >= 20 && Y <= 100) || Y === 400;
}
console.log(boundary(10));
console.log(boundary(100));
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log("esercizio 5");

function epify(stringa) {
  if (stringa.startsWith("EPICODE")) {
    return stringa; // Se la stringa inizia già con "EPICODE", ritorna la stringa originale
  } else {
    return "EPICODE " + stringa; //  aggiunge "EPICODE" all'inizio della stringa fornita
  }
}
console.log(epify("amo i gatti"));
console.log(epify("EPICODE tutte cose"));
console.log(epify("ipa"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

console.log("esercizio 6");

function check3and7(numero) {
  if (numero < 0) {
    return false;
  }
  if (numero % 3 === 0 || numero % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(check3and7(3));
console.log(check3and7(21));
console.log(check3and7(10));
console.log(check3and7(-1));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
console.log("esercizio 7");
function reverseString(stringa) {
  let stringaInvertita = ""; // stringa vuota per contenere la nuova stringa
  for (let i = stringa.length - 1; i >= 0; i--) {
    stringaInvertita = stringaInvertita + stringa[i];
  }
  return stringaInvertita;
}
console.log(reverseString("EPICODE"));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
console.log("esercizio 8");
function upperFirst(str) {
  let parole = str.split(" ");

  for (let i = 0; i < parole.length; i++) {
    parole[i] =
      parole[i].charAt(0).toUpperCase() + parole[i].slice(1).toLowerCase(); // parola corrente prende la prima lettera della parola  e la rendi maiuscola poi aggiungi il resto delle lettere partendo dall'indice 1 (quindi salta la prima lettera ) ma in minuscolo
  }

  return parole.join(" ");
}
console.log(upperFirst("ciao amici"));
console.log(upperFirst("voglio un gelato"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
