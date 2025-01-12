type Employee ={
    readonly id:number,
    name:string,
    salary:number,
    phone?:string //ใส่ก็ได้ไม่ใส่ก็ได้
}
let emp1:Employee={id:1, name:"got", salary:50000, phone:"060-xxx-xxxx"}
console.log(emp1)
// emp1.id=100
emp1.name="สมชาย"
console.log(`id:` +emp1.id+ "\nname:"+emp1.name)

let emp2:Employee={id:3, name:"pichaya", salary:50000}