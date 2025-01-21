 let a= 23;


 //use of Enumeration
 enum UserROles{
    admin = "admin",
    guest ="guest"
 }

 UserROles.admin;

 


//use of interfaces

interface Person {
   name: String,
   age: Number,
   height: Number,
   gender?: String //?denote as optional
}

function PersonDetails(data: Person) {
   console.log(data);
}

PersonDetails({name:"sajit", age:21 , height:5.6});
