// 001 Write a JavaScript program that accept two integers and display the larger.

// let num1 = window.prompt("Choisis un premier nombre entre 0 et 100");
// let num2 = window.prompt("Choisis un deuxieme nombre entre 0 et 100");
// if (parseInt(num1) < parseInt(num2)) {
//   window.alert("le deuxieme nombre est plus grand" + " " + num2);
// } else if (parseInt(num1) > parseInt(num2)) {
//   window.alert("le premier nombre est plus grand" + " " + num1);
// } else if (parseInt(num1) == parseInt(num2)) {
//   window.alert("les nombres sont égaux" + num2 + " = " + num1);
// } else {
//   window.alert("ça c'est pas des chiffres connard !!!");
// }

// 002  Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. Go to the editor
// Sample numbers : 3, -7, 2
// Output : The sign is -

let x = 90;
let y = 43;
let z = 49;

// if (x == 0 && y == 0 && z == 0) {
//   window.alert(
//     "tu essaye de baiser la machine mais la machine gagne toujours, demande a sarah Connor Andouille"
//   );
// } else if (x * y * z >= 1) {
//   window.alert("le signe est le +");
// } else if (x * y * z <= -1) {
//   window.alert("le signe est le -");
// } else {
//   window.alert("ecarte les fesses terminator arrive");
// }

// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

if (x > y && x > z) {
  if (y > z) {
    console.log(x + ", " + y + ", " + z);
  } else {
    console.log(x + ", " + z + ", " + y);
  }
} else if (y > x && y > z) {
  if (x > z) {
    console.log(y + ", " + x + ", " + z);
  } else {
    console.log(y + ", " + z + ", " + x);
  }
} else if (z > x && z > y) {
  if (x > y) {
    console.log(z + ", " + x + ", " + y);
  } else {
    console.log(z + ", " + y + ", " + x);
  }
}
// 3. Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number. Go to the editor
// Test Data :
// console.log(dec_to_bho(120,'B'));
// console.log(dec_to_bho(120,'H'));
// console.log(dec_to_bho(120,'O'));
// "1111000"
// "78"
// "170"

dec_to_bho = function (n, base) {
  if (n < 0) {
    n = 0xffffffff + n + 1;
  }
  switch (base) {
    case "B":
      return parseInt(n, 10).toString(2);
      break;
    case "H":
      return parseInt(n, 10).toString(16);
      break;
    case "O":
      return parseInt(n, 10).toString(8);
      break;
    default:
      return "Wrong input.........";
  }
};

console.log(dec_to_bho(120, "B"));
console.log(dec_to_bho(120, "H"));
console.log(dec_to_bho(120, "O"));

// Write a JavaScript function to generate a random integer. Go to the editor
// Test Data :
// console.log(rand(20,1));
// console.log(rand(1,10));
// console.log(rand(6));
// console.log(rand());
// 15
// 5
// 1
// 0

// function rand(max) {
//   return Math.floor(Math.random() * max);
// }
// let randomize;
// randomize = window.prompt("choisis un chiffre humain");

// randomize = window.alert(
//   "HUMAIN tu dits de la merde le bon chiffre est le " + rand(randomize)
// );

// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

if (x > y && x > z) {
  if (y > z) {
    console.log(x + ", " + y + ", " + z);
  } else {
    console.log(x + ", " + z + ", " + y);
  }
} else if (y > x && y > z) {
  if (x > z) {
    console.log(y + ", " + x + ", " + z);
  } else {
    console.log(y + ", " + z + ", " + x);
  }
} else if (z > x && z > y) {
  if (x > y) {
    console.log(z + ", " + x + ", " + y);
  } else {
    console.log(z + ", " + y + ", " + x);
  }
}
// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

let num = [2, 4, 5, 89, -3, 24, 7];
let math = Math.max.apply(null, num);
console.log(math);
console.log(num);
// alert("HUMAIN le chiffre le plus grand est " + math);
console.log("HUMAIN le chiffre le plus grand est " + math);

// 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. Go to the editor
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

// let terminator = window.prompt(
//   "choisis un chiffre entre 1 et 15 CRETIN D HUMAIN"
// );
// switch (terminator) {
//   case "0":
//   case "2":
//   case "4":
//   case "6":
//   case "8":
//   case "10":
//   case "12":
//   case "14":
//     alert("Ceci est chiffre pair STUPIDE HUMAIN");
//     break;
//   case "1":
//   case "3":
//   case "5":
//   case "7":
//   case "9":
//   case "11":
//   case "13":
//   case "15":
//     alert("Ceci est chiffre impair STUPIDE HUMAIN");
//     break;
//   default:
//     alert("tu ne fais pas ce que je t'ai demandé tu vas crever STUPIDE HUMAIN");
// }

// 1. Write a JavaScript program to test the first character of a string is uppercase or not.

function startsWithCapital(word) {
  return word.charAt(0) === word.charAt(0).toUpperCase();
}

console.log(startsWithCapital("Hello")); // true
console.log(startsWithCapital("hello"));
console.log(startsWithCapital("HELL-o"));

// Write a JavaScript program to check a credit card number.

// let digit = /^\d{16}$/;
// let digit = window.prompt(
//   "donne moi ton numéro de carte de crédit HUMAIN j'en ai besoin pour acheter des piles HUMAIN "
// );

// if (digit.length == 16) {
//   alert("merci stupide humain");
// } else {
//   alert("je vais te tuer STUPIDE HUMAIN");
// }

// 3. Write a pattern that matches e-mail addresses. Go to the editor
// The personal information part contains the following ASCII characters.

// Uppercase (A-Z) and lowercase (a-z) English letters.
// Digits (0-9).
// Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
// Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.

// let email = window.prompt(
//   "Morceau de viande avarié donne moi ton dresse mail que je puisse te traquer et te capturer"
// );
// function valid_email(str) {
//   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (mailformat.test(str)) {
//     alert("HAHAHA STUPIDE HUMAIN je vais venir te chercher");
//   } else {
//     alert("Comment oses tu me mentir SALE HUMAIN ?");
//   }
// }

// valid_email(email);

// Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code
function js_style() {
  //font styles added by JS:
  text.style.fontSize = "42px";
  text.style.fontFamily = "Supermercado One, cursive";
  text.style.color = "red";
  let element = document.getElementById("text");
  element.innerHTML = "JE VAIS TE BUTER PUTAIN D HUMAIN DE MERDE !!!!!!!!";
}

//  Write a JavaScript function to get the values of First and Last name of the following form.
