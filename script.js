let x = "asd"
let y = 12
let z = false
let arr = [ "egy ", "kettő", "három"]
let arr2 = [10, 2, 67]
let arr3 = [ true, false, true]
let arr4 = ["srting", 1, false]

let obj1 = {
    key1: "value",
    key2: 101,
    key3: false,
    key4: [
        "cat",
        "dog",
        "chicken"
    ],
    key5: {
    nestedkey: "text",
    nestedkey2: 66
    },
    users: [
        {
            name: "gipsz",
            age: 25,
            isactive: true,
            pets: [
                {
                name: "Mirci",
                type: "cat"
                }, 
                {
                name: "Kifli",
                type: "dog"
                }
            ]
        },
        {
            name: "John Doe",
            age: 66,
            isactive: false,
            pets: ["Jani", "Laci"]
        }
    ]
}

//console.log(obj1.users[0].pets[0].name)
//console.log(obj1["users"][0]["pets"][0]["name"])

function myFunc () {
    console.log("This is my function")
}

//meg kell hívni a függvényt

myFunc()

function greetMe (name) {
    console.log(`Hello ${name}!`)
}

//meg kell hívni a függvényt

greetMe ("Petra")
greetMe ("Misi")


// megnevezések: paraméter és argumentum
function greetMe (parameter) {
    console.log(`Hello ${parameter}!`)
}
/* greetMe (argumentum)
 */

function addTwoNumbers(number1, number2){
    let sum = number1 + number2
    console.log(`Tha sum of two numbers (${number1}, ${number2}) is: ${sum} `)
    return sum 
}

/* addTwoNumbers(10,2)
addTwoNumbers("kutya","cica")
addTwoNumbers(0,-2)
*/
let resultOfAddTwoNumbers = addTwoNumbers(10,2)
console.log(`The result of resultOfAddTwoNumbers is: ${resultOfAddTwoNumbers}`)

// callback függvény, amit átadok egy másik fv-nek és az használja

function cbExample() {
    console.log("I am a callback function")
}

// cbExample ()

function funcExample(name, callback){
    console.log(`Hello ${name}!`)
    callback()
}

funcExample("Petra", cbExample)