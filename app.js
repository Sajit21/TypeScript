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
//  class person{
//    constructor(public name: string, public age: number =0)
// //for deafult value 
//  {
//    }
//  }
//  let p= new person("sajit", 21)
//  console.log(p.name);
//  //in case of method
//  class bottleMaker{
//   // private fullname:string;
//   constructor(public name:string)
//   {
//   }
//  }
//  class MorebottleMaker extends bottleMaker{
//    constructor(name:string )
//    {
//      super(name)
//    }
//    getdetails(){
//     console.log(this.name)
//    }// we cannot access the private variable
//  }
//  let c= new MorebottleMaker("sajit")
//   c.getdetails();
//use of getter and setter
class person1 {
    _name;
    age;
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        return this._name; //works as getter
    }
    set name(name) {
        this._name = name; //works as setter //takes input from the user
    }
}
let p1 = new person1("sajit", 21);
console.log(p1.name); //gives output of getter
p1.name = "harsh";
console.log(p1.name); //gives output of setter
