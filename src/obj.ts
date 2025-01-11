const person= {
    name: 'John',
    age: 20
    }
const person2:{name:string, age:number} = { name: 'Got', age: 30 }
const position:{lat:number, long:number} = { lat: 90, long: 180}

// console.log(person)
// console.log(person2)
// console.log(position)

const show = (person:{name:string, age:number}) => {
    console.log(person.name)
    console.log(person.age)
}
show(person)