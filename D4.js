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
  // creo la stringa
  if (stringa.startsWith("EPICODE")) {
    //controllare se la stringa contiene Epicode
    return stringa; // Se la stringa inizia già con "EPICODE", ritorna la stringa originale
  } else {
    //se no esequire sotto
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
  let parole = str.split(" "); // splittare la stringa agli spazi

  for (let i = 0; i < parole.length; i++) {
    parole[i] =
      parole[i].charAt(0).toUpperCase() + parole[i].slice(1).toLowerCase(); // parola corrente prende la prima lettera della parola  e
    // la rendi maiuscola poi aggiungi il resto delle lettere partendo dall'indice 1 (quindi salta la prima lettera ) ma in minuscolo
  }

  return parole.join(" "); // riunisci la stringa mettendo uno spazio tra un elemento e un altro
}
console.log(upperFirst("ciao amici"));
console.log(upperFirst("voglio un gelato"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/ console.log("esercizio 9");
const cutString = function (str) {
  return str.slice(1, str.length - 1); // 1 è la prima e str.legh è la lunghezza meno 1
};
console.log(cutString("EPICODE"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
console.log("esercizio 10");
function giveMeRandom(numero) {
  const myArr = [];
  for (let i = 0; i < numero; i++) {
    myArr.push(Math.floor(Math.random() * 10) + 1);
  }
  return myArr;
}
console.log(giveMeRandom(3));
// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

console.log("ESERCIZIO EXTRA 1");

const checkArray = function (array) {
  let summa = 0; // creata per la somma che farò dopo
  for (let i = 0; i < array.length; i++) {
    //mi itero tutta la lunghezza dell'array per estrare il numero corrente
    const currentElement = array[i];
    if (currentElement > 5) {
      // se il numero corrente è più grande di 5 allora stampami la somma di tutti i numeri maggiori di 5
      summa = summa + currentElement;
      console.log("Il numero", currentElement, "è maggiore di 5"); // stampami i numeri maggiore di 5
    }
  }
  console.log("La somma di tutti i numeri maggiori di 5 è:", summa); // stampami la somma dei numeri
};

checkArray(giveMeRandom(5));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

console.log("ESERCIZIO EXTRA 2");

const shoppingCart = [
  {
    price: 10,
    name: "toilet paper",
    id: 1,
    quantity: 6,
  },
  {
    price: 5,
    name: "teeth brush",
    id: 2,
    quantity: 2,
  },
  {
    price: 2,
    name: "tooth paste",
    id: 3,
    quantity: 3,
  },
];

const shoppingCartTotal = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const currentElementPrice = array[i].price;
    const currentElementQuantity = array[i].quantity;
    const currentElementTotalPrice =
      currentElementPrice * currentElementQuantity;
    sum += currentElementTotalPrice;
  }
  console.log("Il totale nel carrello ammonta a:", sum, "euro");
};

shoppingCartTotal(shoppingCart);

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

console.log("ESERCIZIO EXTRA 3");

const paperBag = {
  price: 1,
  name: "paper bag",
  id: 4,
  quantity: 1,
};

const addToShoppingCart = function (obj) {
  shoppingCart.push(obj);
  return shoppingCart.length;
};

const newTotal = addToShoppingCart(paperBag);
console.log("Il nuovo totale di elementi nel carrello è:", newTotal);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

console.log("ESERCIZIO EXTRA 4");

const maxShoppingCart = function (array) {
  let maxPrice = 0;
  let maxObj = null;
  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    const currentElementPrice = array[i].price;
    if (currentElementPrice > maxPrice) {
      maxObj = currentElement;
      maxPrice = currentElement;
    }
  }
  return maxObj;
};

console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

console.log("ESERCIZIO EXTRA 5");

const latestShoppingCart = function (array) {
  const lastElementIndex = array.length - 1;
  const lastElement = array[lastElementIndex];
  return lastElement;
};

console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

console.log("ESERCIZIO EXTRA 6");

const loopUntil = function (int) {
  if (int > 0 && int < 10 && Number.isSafeInteger(int)) {
    let randomNumber = 0;
    let stop = 0;
    while (randomNumber < int || stop < 3) {
      const generateRandom = Math.floor(Math.random() * 10);
      randomNumber = generateRandom;
      if (randomNumber < int) {
        console.log(randomNumber);
      } else {
        stop++;
        console.log("stop", stop);
      }
    }
  } else {
    console.log("Devi inserire un numero intero da 0 a 9!");
  }
};

loopUntil(9);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

console.log("ESERCIZIO EXTRA 7");

const numArray = [5, 6, 10, "skippalo", 6, "skip"];

const average = function (array) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    if (typeof currentElement === "number") {
      sum += currentElement;
      count++;
    }
  }
  const media = sum / count;
  return media;
};

console.log(average(numArray));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

console.log("ESERCIZIO EXTRA 8");

const stringArray = ["prova", "provalo", "è questa la stringa più lunga?"];

const longest = function (array) {
  let max = "";
  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    if (currentElement.length > max.length) {
      max = currentElement;
    }
  }
  console.log(max);
};

longest(stringArray);

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

console.log("ESERCIZIO EXTRA 9");

const emailContent = "Prova prova prova SCAM";
const emailContent1 = "prova prova prova";

const antiSpamFilter = function (emailContent) {
  if (typeof emailContent === "string") {
    if (!emailContent.includes("SCAM") && !emailContent.includes("SPAM")) {
      return true;
    } else {
      return false;
    }
  } else {
    console.log("Devi inserire una stringa");
  }
};

console.log(antiSpamFilter(emailContent));
console.log(antiSpamFilter(emailContent1));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

console.log("RISPOSTA EXTRA 10");

const date = new Date("1999-5-7");

const fromDate = function (date) {
  const currentDate = new Date();
  const dif = currentDate - date;
  const daysPassed = Math.floor(dif / 86400000);
  return daysPassed;
};

console.log("Giorni passati dal quando sono nato:", fromDate(date));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

console.log("ESERCIZIO EXTRA 11");

const matrixGenerator = function (x, y) {
  const matrix = [];
  for (let b = 0; b < y; b++) {
    const row = [];
    for (let i = 0; i < x; i++) {
      let index = b.toString().concat(i.toString());
      console.log(index);
      row.push(index);
    }
    matrix.push(row);
  }
  console.log(matrix);
};

matrixGenerator(5, 3);
