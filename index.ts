const name = "Taeyoon",
age = 29,
gender = "male";


const sayHi = (name, age, gender?) => {  // if '?' is put behind parmeter, that means the parameter is optional 
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
}

sayHi(name,age); // TypeScript tells you what argument is missing


export {};