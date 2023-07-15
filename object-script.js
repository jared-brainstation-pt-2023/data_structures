const janeDoePerson = {
    name: {first: "Jane", last: "Doe"},
    age: 25,
    phone: "555-5555",
    hasDiploma: true,
    felonies: ["arson", "murder"]
}

const johnDoePerson = {
    name: {first: "John", last: "Doe"},
    age: 35,
    phone: "554-5555",
    hasDiploma: false,
    felonies: ["drug possession", "drug sales"]
}

const mostWantedListPeople = []
mostWantedListPeople.push(janeDoePerson);
mostWantedListPeople.push(johnDoePerson);

console.log(mostWantedListPeople)

// console.log(janeDoePerson)

// console.log(janeDoePerson.hasDiploma)
// console.log(janeDoePerson['hasDiploma'])

// janeDoePerson.address = "CitiField"
// console.log(janeDoePerson)
// janeDoePerson['hairColor'] = "brown"
// console.log(janeDoePerson)

// janeDoePerson.favoriteFruits = ["apples", "oranges", "kiwi"]
// console.log(janeDoePerson)
