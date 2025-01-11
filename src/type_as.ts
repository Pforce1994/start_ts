let username:unknown;
username = "gotcha";
// (<string>username).toUpperCase(); // แปลงเป็น string ก่อนแล้วค่อยเรียก method toUpperCase
(username as string).toUpperCase(); // แปลงเป็น string ก่อนแล้วค่อยเรียก method toUpperCase
console.log(username); // gotcha

