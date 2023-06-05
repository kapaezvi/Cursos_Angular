// Import stylesheets
import './style.css';

//inferencia de datos
const a = 10;

//Booleans
let isSuperman = true;

//Numers
const countAvenger = '123A';
const villanos = 20;
let avengers = Number(countAvenger);

console.log({ avengers });

if (!isNaN(avengers)) {
  if (avengers > villanos) {
    console.log('Estamos en problemas');
  }
} else {
  console.log('Estamos a salvo');
}

//String

const batman = 'Batman';
const linternaVerde = 'Linterna verde';
const colcanNegro = `Heroe`;
const poder: string = 'Velocidad';
const edad: number = 35;

console.log('Yo soy ' + batman);
console.log(
  `Yo soy ${linternaVerde} y mi super poder es ${poder} y tengo ${edad} años`
);

//any

const nombre: string = 'pedro';
console.log(nombre.charAt(0));

//Arreglos
const numbers: number[] = [1, 2, 3, 4, 5, 6];
numbers.push(1);
console.log(numbers);

const codigo: string = '12345';
console.log(codigo.toString());

//tuplas

const hero: [string, number, boolean] = ['Dr strange', 10, true];

hero[0] = 'Ironman';
hero[1] = 50;
hero[2] = false;
console.log(hero[1]);
