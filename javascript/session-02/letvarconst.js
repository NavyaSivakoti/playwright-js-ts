//data types: type of data: 
//number, boolean, string

//var, let, const

//1. var: used in old JS -- never use it in modern JS/tools/PW

//Declaration: Re-Declaration is allowed
var x = 10;
var x = 20;
var x = 30;
console.log(x);

//Reassignment: 
var y = 10;
y = 20;
console.log(x)

//3. Hoisting:
console.log(t);//undefined
var t = 90;
console.log(t);


//2. let:
//Declaration: Re-Declaration not allowed
let p = 10;
console.log(p);

let a;
console.log(a);//undefined

//Reassignment: 
let total = 900;
total = 970;
total = 1000;
console.log(total);

//3. Hoisting is allowed but with error at RT
// console.log(h);//Cannot access 'h' before initialization
// let h = 25;


//3. const:
const PI = 3.14;
//PI = 90.99; //TypeError: Assignment to constant variable.
const LOGIN_TITLE = 'LoginPage';
const DAYS_IN_WEEK = 7;
//title, url, days, month, PI, logo, base URL

const days = 7;
//days = 10; //Can't reassign value when variable is declared as const
let salary = 100 * days;
console.log(salary);

//duplicate not allowed
const tr = 100;
//const tr = 200;

//const pi;//error

// console.log(pi);//Cannot access 'pi' before initialization
// const pi = 3.14;
