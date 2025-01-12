//array
const users:string[]=[]
users.push("ก๊อต")
users.push("ปู")
// users.push(100)

const ages:number[]=[18,29,25]

console.log(users[0])

ages.forEach(Element=>{
    console.log(Element)
})

type employee={
    name:string,
    saraly:number,
    department?:string
}

const employees:employee[]=[]
employees.push({name:"ก้อง",saraly:50000,department:"โปรแกรมเมอร์"})

console.log(employees[0])

for(let pers of employees){
    console.log(pers)
}