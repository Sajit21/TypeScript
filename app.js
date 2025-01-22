"use strict";
//  let a= 23;
//  //use of Enumeration
//  enum UserROles{
//     admin = "admin",
//     guest ="guest"
//  }
//  UserROles.admin;
// //use of interfaces
// interface Person {
//    name: String,
//    age: Number,
//    height: Number,
//    gender?: String //?denote as optional
// }
// function PersonDetails(data: Person) {
//    console.log(data);
// }
// PersonDetails({name:"sajit", age:21 , height:5.6});
// //type aliases
// type arg= string | null ;
//  function abcd(obj :arg)
//  {
//  }
//  abcd("harsh")
//  ///
//use of constructor
class person {
    constructor(name, age = 0) {
        this.name = name;
        this.age = age;
    }
}
let p = new person("sajit", 21);
console.log('helllo boys');
console.log(p.name);

