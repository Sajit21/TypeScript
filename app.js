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
//in ts we exclude the  public name part outside the constructor and also exclude the this.name=name part
class person {
    name;
    age;
    constructor(name, age = 0) {
        this.name = name;
        this.age = age;
    }
}
let p = new person("sajit", 21);
console.log(p.name);
//in case of method
class bottleMaker {
    name;
    // private fullname:string;
    constructor(name) {
        this.name = name;
    }
}
class MorebottleMaker extends bottleMaker {
    constructor(name) {
        super(name);
    }
    getdetails() {
        console.log(this.name);
    } // we cannot access the private variable
}
let c = new MorebottleMaker("sajit");
c.getdetails();
