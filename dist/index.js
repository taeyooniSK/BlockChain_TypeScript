"use strict";
// const sayHi = (name:string, age:number, gender:string):void => {   // when you don't want the function to return anything, you can put ":void" 비었다는 뜻
//     return `Hello ${name}, you are ${age}, you are a ${gender}`;     //이 경우엔 error가 뜸 (함수에서 리턴되는 값이 없다고 type을 voide로 설정해놨는데 return된 값이 나오므로)
// }
Object.defineProperty(exports, "__esModule", { value: true });
// sayHi("Taeyoon", 29, "male"); 
const sayHi = (name, age, gender) => {
    return `Hello ${name}, you are ${age}, you are a ${gender}!`; // string을 리턴하므로 유효함
};
console.log(sayHi("Taeyoon", 29, "male"));
//# sourceMappingURL=index.js.map