let service:number=0
let result1:string

switch (service) {
    case 1:
        result1= "สอบถามยอดเงิน"
        break;
    case 2:
        result1= "ฝากเงิน"
        break;

    case 3:
        result1= "ถอนเงิน"
        break;

    default:
        result1= "หมายเลขบริการไม่ถูกต้อง"
        break;
}
console.log(`ผลลัพท์ = ${result1}`)