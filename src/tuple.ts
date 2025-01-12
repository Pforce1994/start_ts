const point:[number,number] = [10,20]
const goodstaus:[number,string] = [200,"OK"]

console.log(goodstaus)

// tuple label
const point1:[x:number,y:number] =[35,23]
const point2:[code:number,status:string] = [200,"OK"]
const notFound:[code:number,status:string] = [404,"ไม่พบข้อมูล"]

console.log(notFound)

//type tuple
type HttpStatusCode=[number,string]
const point4:HttpStatusCode = [200,"OK"]
const notFound1:HttpStatusCode = [404,"ไม่พบข้อมูล"]