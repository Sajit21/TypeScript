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

 class person{
   constructor(public name: string, public age: number =0)
//for deafult value 
 {

   }
 }

 let p= new person("sajit", 21)
 console.log(p.name);