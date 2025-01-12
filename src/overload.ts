function sayHi():string
function sayHi(name:string):string
function sayHi(name?:unknown):unknown{
    if (!name) {
        return `Hello TypeSricpt`
    }
    if(typeof name == "string"){
        return `Hello ${name}`      
    }
    throw new Error("ชนิดข้อมูลไม่ถูกต้อง");
    
}

console.log(sayHi())
console.log(sayHi("Got"))

function total(a:number, b:number):number
function total(a:string, b:string):string
function total(a:unknown, b:unknown):unknown{
    if (typeof a == "number" && typeof b == "number") {
        return  a+b
    }else if (typeof a == "string" && typeof b == "string"){
        return    parseInt(a)+parseInt(b)
    }
    throw new Error("ชนิดข้อมูลไม่ถูกต้อง");
 }
console.log(total(100,200))
console.log(total("100","200"))

const total1=(...numbers:number[])=>{
    return numbers.reduce((result,value)=>{
        return  result+value
    },0)
}

console.log(total1(100,200,300,400,500,600,700,800,900,1000))