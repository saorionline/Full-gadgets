const string = "Piezas gráficas interactivas, aquellas gráficas son arte";
const replacedString = string.replace("gráficas", "creativas");
console.log(replacedString);

const replacedString2 = string.replaceAll("gráficas", "creativas");
    console.log(replacedString2);

    // cómo volver de forma privada recurso "Found jewel"
class Message {
    show(val) {
        console.log(val);
    } ;
    get add() {
    }
}

const message = new Message();
message.show("Found jewel");

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

class anyClass {
    constructor(element) {
    this.ref = new WeakRef(element)
        {}
    }
}

let isTrueOne = true;
let isFalseTwo = false;
console.log(isTrueOne &&= isFalseTwo);

let isTrueFirst = true;
let isFalseSecond = false;
console.log(isTrueFirst ||= isFalseSecond);

let isTruePrior = undefined;
let isFalseSec = false;
console.log(isTruePrior ??= isFalseSec);
