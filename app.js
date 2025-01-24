"use strict";
//  let a= 23;
// function person(name:string ,age:number) : number
function person(name, age) {
    if (typeof name === "string" && age === undefined) {
        console.log("hey");
    }
    if (typeof name === "string" && typeof age === "number") {
        return 10;
    }
    else {
        console.log("nothing");
    }
}
// console.log(name,age)
// }
person("sajit");
person("sajit", 21);
person("hari");
