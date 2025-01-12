"use strict";
//array
const users = [];
users.push("ก๊อต");
users.push("ปู");
// users.push(100)
const ages = [18, 29, 25];
console.log(users[0]);
ages.forEach(Element => {
    console.log(Element);
});
const employees = [];
employees.push({ name: "ก้อง", saraly: 50000, department: "โปรแกรมเมอร์" });
console.log(employees[0]);
for (let pers of employees) {
    console.log(pers);
}
