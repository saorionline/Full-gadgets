function  newFunction (name, age, country) {
    var name = name || "Saori";
    var age = age || 32;
    var country = country || "Colombia";
    console.log(name, age, country)
}

//es6
function newFunction2 (name = "Saori", age = 32, country = "Colombia")
{
    console.log(name, age, country);
};

newFunction2();
newFunction2("Edward", 27, "Uruguay");

let hello = "Hello";
let world = "World";
let phrase = `${hello} ${world}`
console.log(phrase);

let lorem = "Qui consiquatur ipsum duis yet minima \n" + "qui elsim not darme tum."
console.log(lorem);
//es6
let lorem2 = `Qui consiquatur ipsum duis yet minima
qui elsim not darme tum
`;
console.log(lorem2);

let  userNet = {
    "name": "Luna",
    "age": 32,
    "country": "Panama",
}

console.log(userNet.name, userNet.age, userNet.country);
//es6
 let { name, age, country } = userNet;
 console.log(name, age, country);

 let groupOrange = [ "Dana", "Rosie", "Perl"];
 let groupGreen = [ "Ron", "Harry", "Hermione"];
 let classRoom = [ "Science", ...groupOrange, ...groupGreen];
 console.log(classRoom);

{
    var globalVar = "Educate Everyone";
}
console.log(globalVar);

{
    let globalLet = "Global Everyone";
    console.log(globalLet);
}

const a = 'b';
    //not allowed -> a = 'a';
    console.log(a);

    //Arrow functions, promesses, and parameters inside objects

let school = "Corazonista";
let adress = "Cedritos";
let city = "Bogotá";

obj = { school: school, adress: adress, city: city};
object2 = {school, adress, city};
console.log(object2);

const mails = [
    {subject: 'Presentation', date: 12},
    {subject: 'Meeting', date: 11},
    {subject: 'Close up', date: 13},
]

let listOfMails = mails.map( function( item) {
    console.log(item.subject, item.date);
})

let listOfMails2 = mails.map( item => console.log( item.subject))

const listOfMails3 = (subject, date) => {}
const listOfMails4 = date => {}

let num = 2;
let axel = [
    { yaxis: 32, xaxis: 54}
];

const squareTye =  num * num;
console.log(squareTye);
//promesses
const initPromise = () => {
    return new Promise((resolve, reject) => {
        if ( true) {
            resolve("I told you");
        } else {
            reject("Ups");
        }
    })
}

initPromise()
.then(response => console.log(response))
.catch(error => console.log(error));
//modules
class calculator {
    constructor() {
        this.valueAxisX = 0;
        this.valueAxisY = 0;
    }
    sumUp(valueAxisX, valueAxisY) {
        this.valueAxisX = valueAxisX;
        this.valueAxisY = valueAxisY;
        return this.valueAxisX + this.valueAxisY;
    }
}

const calcuInGo = new calculator();
console.log(calcuInGo.sumUp(2,2));

//import hello from "./module";
//hello();

//generator
function* helloWorld() {
    if (true) {
        yield "Hello World";
    }
    if (true) {
        yield "Nice to meet you";
    }
}

const generatorHelloW = helloWorld();
console.log(generatorHelloW.next().value);
console.log(generatorHelloW.next().value);
console.log(generatorHelloW.next().value);