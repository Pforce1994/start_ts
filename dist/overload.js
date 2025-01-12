"use strict";
function sayHi(name) {
    if (!name) {
        return `Hello TypeSricpt`;
    }
    if (typeof name == "string") {
        return `Hello ${name}`;
    }
    throw new Error("ชนิดข้อมูลไม่ถูกต้อง");
}
console.log(sayHi());
console.log(sayHi("Got"));
function total(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
    else if (typeof a == "string" && typeof b == "string") {
        return parseInt(a) + parseInt(b);
    }
    throw new Error("ชนิดข้อมูลไม่ถูกต้อง");
}
console.log(total(100, 200));
console.log(total("100", "200"));
const total1 = (...numbers) => {
    return numbers.reduce((result, value) => {
        return result + value;
    }, 0);
};
console.log(total1(100, 200, 300, 400, 500, 600, 700, 800, 900, 1000));
