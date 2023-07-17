//creating an object and storing it in a variable named "janeDoePerson"
//giving the object properties of name, age, phone, hasDiploma, felonies
//giving values to all of those properties
//object value for name, integer value of age, string value for phone, boolean value for hasDiploma, array value for felonies
const janeDoePerson = {
    name: {first: "Jane", last: "Doe"},
    age: 25,
    phone: "555-5555",
    hasDiploma: true,
    felonies: ["arson", "murder"]
}
//logging the value of the janeDoePerson object variable
console.log(janeDoePerson)
//logging the hasDiploma property value for the janeDoePerson
console.log(janeDoePerson.hasDiploma)
//logging the hasDiploma property value for the janeDoePerson
console.log(janeDoePerson['hasDiploma'])
//adding an address property to the janeDoePerson object with a value of 'CitiField'
janeDoePerson.address = "CitiField"
//logging the value of the updated janeDoePerson object
console.log(janeDoePerson)
//adding a 'hairColor' property to the janeDoePerson object with a value of 'brown'
janeDoePerson['hairColor'] = "brown"
//logging the value of the updated janeDoePerson object
console.log(janeDoePerson)
//adding a 'favoriteFruits' property to the janeDoePerson object with a value of 'brown'
janeDoePerson.favoriteFruits = ["apples", "oranges", "kiwi"]
//logging the value of the updated janeDoePerson object
console.log(janeDoePerson)

//creating another very similar object and storing it in a variable named "johnDoePerson"
//giving the object properties of name, age, phone, hasDiploma, felonies
//giving values to all of those properties
//object value for name, integer value of age, string value for phone, boolean value for hasDiploma, array value for felonies
const johnDoePerson = {
    name: {first: "John", last: "Doe"},
    age: 35,
    phone: "554-5555",
    hasDiploma: false,
    felonies: ["drug possession", "drug sales"]
}
//adding (push) a felony to the felonies array for the johnDoePerson object
johnDoePerson.felonies.push("grand theft auto")
//logging the value of the updated johnDoePerson object
console.log(johnDoePerson)

//creating an empty array and storing it in a variable called mostWantedListPeople 
const mostWantedListPeople = []
//adding the janeDoePerson object variable to the end of the mostWantedListPeople array
mostWantedListPeople.push(janeDoePerson);
//adding the johnDoePerson object variable to the end of the mostWantedListPeople array
mostWantedListPeople.push(johnDoePerson);
//since they are both most wanted people, it makes sense that they belong in the same array

//logging the value of the mostWantedListPeople array
console.log(mostWantedListPeople)
