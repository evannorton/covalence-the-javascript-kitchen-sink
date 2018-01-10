//step 2: name variable      
let name = "Evan";
//step 3: states constant
const STATES = 50;
//step 4: sum 5 and 4
let sum = 5 + 4;      
//step 5: check if name starts with L, respond based on result

if (charCodeAt(0) > 76) {
    alert("Back of the line!");
} else {
    alert("Next!");
}

//step 7: Hello World! function
function sayHello() {
    alert("Hello World!");
}
//step 8: call function
sayHello();                
//step 9: checkAge function
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
//step 10: make friends and run through the function
let charles = {
    name: "Charles",
    age: 21
};
let abby = {
    name: "Abby",
    age: 27
};
let james = {
    name: "James",
    age: 18
};
let john = {
    name: "John",
    age: 17
};
checkAge(charles.name, charles.age);
checkAge(abby.name, abby.age);
checkAge(james.name, james.age);
checkAge(john.name, john.age);
//step 11: vegetable array
let veggies = ["spinach", "corn", "peppers"];
//step 12: loop through veggies
for (let i=0; i < veggies.length; i++) {
    console.log(veggies[i]);
}
//step 13: array of 5 friends
let friends = [
    {
        name: "Trey",
        age: 20
    },
    {
        name: "Jeff",
        age: 22
    },
    {
        name: "Mike",
        age: 23
    },
    {
        name: "Page",
        age: 22
    },
    {
        name: "Fish",
        age: 24
    }
];
//step 14: run friends through loop
for (let i=0; i < friends.length; i++) {
    checkAge(friends[i].name, friends[i].age);
}
//step 15: getLength function
function getLength(string) {
    return string.length;
}
//step 16: call function
let length = getLength("Hello World");
//step 17: check odd/even on length
if (length % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}
