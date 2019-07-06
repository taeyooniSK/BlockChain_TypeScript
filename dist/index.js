"use strict";
// class Human { 
//     public name: string;
//     public age : number;
//     public gender : string;
//     constructor(name: string, age: number, gender?: string){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// const taeyoon = new Human("Taeyoon", 28, "male");
// const sayHi = (person: Human):string => {   // ':string'은 함수가 string을 리턴할 것이라고 타입을 설정해주는 의미
//     return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;     // string을 리턴하므로 유효함
// }
// console.log(sayHi(taeyoon)); 
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calclulateBlockHash = (// static methods can be used even before when you instantiate class Block
index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
const genesisBlock = new Block(0, "20202020222", "", "Hello world!", 123456);
let blockChain = [genesisBlock];
const getBlockChain = () => blockChain;
const getLatestBlock = () => blockChain[blockChain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
console.log(blockChain);
//# sourceMappingURL=index.js.map