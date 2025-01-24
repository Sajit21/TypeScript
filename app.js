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
//   class person1{
//     constructor (public _name:string, public age:number)
//     {
//     }
//     get name(){
//       return this._name;  //works as getter
//     }
//     set name(name:string){
//       this._name=name; //works as setter //takes input from the user
//     }
//   }
//   let p1 =new person1("sajit",21)
//  console.log(p1.name); //gives output of getter
//  p1.name="harsh"
//  console.log(p1.name); //gives output of setter
//use of static
// class shery{
//   static version= 3.4;
//   static getnumber(){
//     return Math.random()
//   }
// }
// console.log(shery.version);
// console.log(shery.getnumber());
//abstract classes and methods 
//use of function with calback
// function person3(name: string, age: number, cb:(arg : string)=>void){ //void cause didn't returned anything 
//   cb("hari")
// }
// person3("ram",22,(arg:string)=>{
//   console.log(arg) //use of callback
// })
//use of rest paramaters
// function sum(...args:number[]){
//   // return args.reduce((a,b)=>a+b,0)
//   console.log(args)
// }
// sum(1,2,3,4,5,6,7,8,9,10)
// //ts function overloading
// function person(name:string ) :void
// function person(name:string ,age:number) : number
// function person(name:any, age?:number): |void | number{
//   if(typeof name === "string" && age === undefined){
//     console.log("hey")
//   }
// if( typeof name === "string" && typeof age === "number"){
//   return 10;
// }
// else
// {
//   console.log("nothing")
// }
// }
// // }
// person("sajit")
// let b =person("sajit",21)
// console.log(b)
// person("hari")
//generics 
//when we use a function and we don't know the type of the data we are using then we use generics
function log(name) {
    console.log(name);
}
log("sajit"); //simple use of generics  
function details(obj) {
    console.log(obj);
}
details({ name: "sajit", age: 21, address: "kirtipur" }); //syntax for the value pass in obj
