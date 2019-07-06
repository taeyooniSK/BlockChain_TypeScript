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

// const taeyoon = new Human("Taeyoon", 28, "male");

// const sayHi = (person: Human):string => {   // ':string'은 함수가 string을 리턴할 것이라고 타입을 설정해주는 의미
//     return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;     // string을 리턴하므로 유효함
// }

// console.log(sayHi(taeyoon)); 

import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calclulateBlockHash = ( // static methods can be used even before when you instantiate class Block
        index: number, 
        previousHash: string, 
        timestamp: number, 
        data: string): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();


    constructor(
        index: number, 
        hash: string, 
        previousHash: string, 
        data: string, 
        timestamp: number
    ){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}



const genesisBlock:Block = new Block(0, "20202020222", "", "Hello world!", 123456);

let blockChain:Block[] = [genesisBlock];

const getBlockChain = () : Block[] => blockChain;

const getLatestBlock = () : Block => blockChain[blockChain.length-1];

const getNewTimeStamp = () : number => Math.round(new Date().getTime() / 1000);

console.log(blockChain);

export {};