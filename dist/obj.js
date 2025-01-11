"use strict";
const person = {
    name: 'John',
    age: 20
};
const person2 = { name: 'Got', age: 30 };
const position = { lat: 90, long: 180 };
// console.log(person)
// console.log(person2)
// console.log(position)
const show = (person) => {
    console.log(person.name);
    console.log(person.age);
};
show(person);
