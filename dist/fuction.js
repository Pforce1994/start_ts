"use strict";
// function sayhi() {
//     console.log('Hi!');
// }
// sayhi();
// function sayhi(name:string):void {
//     console.log('Hi! ' + name);
// }
// sayhi('Tom');
// sayhi('Bob');
// function sayhi():string {
//     return 'Hi! '; 
// }
// console.log(sayhi());
// function sayhi(name:string):string {
//     return 'Hi! ' + name;    
// }
// console.log(sayhi('Tom'));
// Arrow function
const sayhi = (name) => {
    return 'Hi! ' + name;
};
console.log(sayhi('Tom'));
// default paramiter
const showemployee = (name, age, address = 'กรุงเทพ') => {
    console.log('age: ' + age + ', Name: ' + name + ', Address: ' + address);
};
showemployee('Tom', 10, 'เชียงใหม่');
showemployee('Got', 20);
