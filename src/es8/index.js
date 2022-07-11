const data = {
    frontend: "Saori",
    backend: "Isabel",
    design: "Leia",
}

const entriesRock = Object.entries(data);
console.log(entriesRock);
console.log(entriesRock.length);

const insidesOut = Object.values(data);
console.log(insidesOut);
console.log(insidesOut.length);

const reTalkStrike = "What is what";
console.log(reTalkStrike.padStart(33,"Where is who"));
console.log(reTalkStrike.padEnd(24,"----"));

const beSerious = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() =>resolve('Practice and read'), 3000)
            : reject( new Error('Test Error'))
    })
};

const beSeriousAsync = async () => {
    const hello = await beSerious();
    console.log(hello);
};

beSeriousAsync();
//lo que tenga una lógica o un valor que no coincida se va a saber con esto
const beNice = async () => {
    try {
        const whatHow = await beSerious ();
        console.log(whatHow);
    } catch (error) {
        console.log(error)
    };
};

beNice();

