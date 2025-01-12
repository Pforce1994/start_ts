const person= {
    name: 'John',
    age: 20
    }
const person2:{name:string, age:number} = { name: 'Got', age: 30 }
const position:{lat:number, long:number} = { lat: 90, long: 180}

// console.log(person)
// console.log(person2)
// console.log(position)

// const show = (person:{name:string, age:number}) => {
//     console.log(person.name)
//     console.log(person.age)
// }
// show(person)

// const   randomposition = (lat:number,long:number):object => { 
//     return { 
//         lat:Math.random(),
//         long:Math.random() 
//     }
// } 
// console.log(randomposition(90,180))

const  showdetail=(data:{name:string,age:number}) => {
    console.log(`ชื่อ = ${data.name},อายุ = ${data.age}`)
}
const   person3= {
    name:"Kongruksiam",
    age:30,
    address:"กรุงเทพมหานคร"
}
// showdetail({name:"Kongruksiam", age:30, address:"กรุงเทพมหานคร"})