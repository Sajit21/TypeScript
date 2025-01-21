"use strict";
let a = 23;
//use of Enumeration
var UserROles;
(function (UserROles) {
    UserROles["admin"] = "admin";
    UserROles["guest"] = "guest";
})(UserROles || (UserROles = {}));
UserROles.admin;
function PersonDetails(data) {
    console.log(data);
}
PersonDetails({ name: "sajit", age: 21, height: 5.6 });
function abcd(obj) {
}
abcd("harsh");
