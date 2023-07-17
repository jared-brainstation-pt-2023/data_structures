//creating an array of strings and storing it in a variable appropriately called 'users'
let users = ["bob", "jim"];
//creating an array of strings and storing it in a variable appropriately called 'greetings'
let greetings = ['world', 'goodbye', "hello"];
//logging the value of the 'greetings' array
console.log(greetings);
//adding a string called "bonjour" to the end of the 'greetings' array
greetings.push("bonjour");
//logging the value of the 'greetings' array to show that it has been manipulated after .push()
console.log(greetings);
//removing the last index in the greetings array and storing it in a variable called 'lastIndexInGreetingsArray'
const lastIndexInGreetingsArray = greetings.pop();
//logging the value of the 'lastIndexInGreetingsArray' variable
console.log(lastIndexInGreetingsArray)
//logging the value of the 'greetings' array to show that is been manipulated after .pop() was called
console.log(greetings);
//adding a string called "bonjour" to the end of the 'greetings' array
greetings.push("bonjour");
//adding a string called "welcome" to the end of the 'greetings' array
greetings.push("welcome");
//logging the value of the 'greetings' array to show that it has been manipulated after .push()
console.log(greetings);
//starting at the 1 index, removing 2 items. so, index 1 & 2 are removed
greetings.splice(1, 2);
//logging the value of the 'greetings' array to show that it has been manipulated after .splice()
console.log(greetings);
//logging the length of the greeting array after manipulation
console.log(greetings.length);
//creating a new array and storing it in a variable named 'namesArray'
let namesArray = new Array();
//adding a string called "Joe" to the end of the 'namesArray' array
namesArray.push("Joe")
//adding a string called "Bob" to the end of the 'namesArray' array
namesArray.push("Bob")
//logging the value of the 'namesArray' variable
console.log(namesArray)