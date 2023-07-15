let users = ["bob", "jim"];
let greetings = ['world', 'goodbye', "hello"];

console.log(greetings);

greetings.push("bonjour");

console.log(greetings);

const lastIndexInGreetingsArray = greetings.pop();
console.log(lastIndexInGreetingsArray)

console.log(greetings);

greetings.push("bonjour");
greetings.push("welcome");

console.log(greetings);
greetings.splice(1, 2);
console.log(greetings);

// console.log(greetings.length);

let namesArray = new Array();
namesArray.push("Joe")
namesArray.push("Bob")
console.log(namesArray)