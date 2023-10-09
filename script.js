const arr = ['egy', 'kettő', 'három', 'negy']

// console.log(arr.includes("text"))
// console.log(arr.includes("kettő"))

console.log(["one","two", "tree", "four"].includes("four"))


const str = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'

console.log(str.indexOf("The"))

// szünet

const obj = {
    name: "Gipsz Jakab" ,
    age: 27,
    pets: [
        "Mirci",
        "Lajcsi",
        "Géza"
    ],
    children: [
        {
        name: "Jakabb",
        age: 5
        }
    ]
}

for (const key of Object.keys(obj)) {
    console.log(key, obj[key])
}

const users = [
    {
        name: "John Doe",
        age: 21
    },
    {
        name: "Kovács János", 
        age: 43
    },
    {
        name: "Tormasi Petra",
        age: 28
    }
]

users.forEach(function(user) {
    console.log(user.name)
})

users.forEach((user) => console.log(user.name))



const userNames = []
// belepusholja a végére az elemeket
users.forEach((user) => userNames.push(user.name))

console.log(userNames)
// ez nem adja vissza az eredményt rögtön, van ehelyett másik, ami jobb kicsit -->



// a mapnek egyből van visszatérési értéke 
// nem csak az adott elemet tudom kiírni vele, hanem az indexet is 
const result = users.map((user, index) => console.log(index, user.name))

console.log(result)



const names = users.map((user, index) => {
    return {
        username: user.name,
        age: user.age,
        id: index + 1
    }
}
)
console.log(names)


const mapped = users.map((user, index) => {
    return `The user name is: ${user.name}, he/she is ${user.age} years old. He/she is at the ${index + 1} place.`
})
console.log(mapped)