"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "Taeyoon",
    age: 29,
    gender: "male"
};
const sayHi = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`; // string을 리턴하므로 유효함
};
console.log(sayHi(person));
//# sourceMappingURL=index.js.map