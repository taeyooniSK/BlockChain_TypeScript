const person = {
    name: "Taeyoon",
    age: 29,
    gender: "male"
}

interface Human {
    name: string;
    age: number;
    gender: string;
}

const sayHi = (person: Human):string => {   // ':string'은 함수가 string을 리턴할 것이라고 타입을 설정해주는 의미
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;     // string을 리턴하므로 유효함
}

console.log(sayHi(person)); 


export {};