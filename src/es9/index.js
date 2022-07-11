const objects = {
    task: "review",
    deliver: "monday",
    teacher: "Frida Khalo"
}

let { task, ...all} = objects;
console.log(task, all);

//select and add
const elements = {
    board: "screen",
    eraser: "devise",
}

const objectsFirst = {
    ...elements,
    pointer: "Art History",
}

console.log(objectsFirst);
//call and end
const makeDoIt = () => {
    return new Promise((resolve, reject) => {
        (true)
        //? resolve ("Almost there")
        ? setTimeout(() => resolve("Blue clean up at the foremost"), 3000)
            : reject("There is an error");
    });
};

makeDoIt()
.then (response => console.log(response))
.catch (error => console.log(error))
    .finally (() => console.log('End program'));

//regex data manager
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const matchData = regexData.exec("2022-07-01");
const yearSet = matchData[1];
const monthSet = matchData[2];
const daySet = matchData[3];

console.log (yearSet, monthSet, daySet)
