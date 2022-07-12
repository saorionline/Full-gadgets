let jewelExplorer = [1,2,3, [4,5,6,7,8,9,10, [11,12,13,14,15,16]]];
 console.log(jewelExplorer.flat(2));

let jewelExpS = [1,2,3,4,5,6];

console.log(jewelExpS.flatMap(value => [value, value * 2]));

let kitty = "    qui est Français";
console.log(kitty);
console.log(kitty.trimStart());

let parrot = "ce n'est pas Mois      "
console.log(parrot);
console.log(parrot.trimEnd());

try {
    //ya no pasar catch(error) sino q está disponible dentro del bloque de código.
} catch {
    error
}

// trabajar con objetos a arreglos
let entriesLog = [["Volcano", "Cappucino"],[ "Hill", "Coffee"]];
console.log(Object.fromEntries(entriesLog));

let interSyml = "Icon street";
let multiSyml = Symbol(interSyml);
console.log(multiSyml.description);
