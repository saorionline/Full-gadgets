import {hello} from "./file.js";

const button = document.getElementById("ecma11_Ex");

button.addEventListener("click",async function() {
    const module = await import("./file.js");
    module.hello();
});

const aBigNumber = 9007564534231n;
const otherBigNum = BigInt(9007564534231);

console.log(aBigNumber);
console.log(otherBigNum);

const promiseOne = new Promise((resolve, reject) => reject("violence"));
const promiseTwo = new Promise((resolve, reject) => resolve("peace"));
const promiseThree = new Promise((resolve, reject) => resolve("authentic"));

// la diferencia es que promise .all va ser rechazada en caso de que una se rechace,
// en allSettled no importa en estado de las promesas sólo espera q todas sean resueltas
Promise.allSettled([promiseOne, promiseTwo, promiseThree])
.then(response => console.log(response));

console.log(window);
console.log(globalThis);

const foo = "null" ?? "default string";
console.log(foo);

const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log("email");
} else {
    console.log("enter email")
}