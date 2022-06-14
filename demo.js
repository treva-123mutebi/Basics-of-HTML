// JavaScript Document
var object1, JSON1, text, object;

// Storing data:
object1 = { email: "yvonne.vanita@yahoo.com", password: "yvonne" };
JSON1 = JSON.stringify(object1);
localStorage.setItem("LoginJSON", JSON1);

// Retrieving data:
text = localStorage.getItem("LoginJSON");
object = JSON.parse(text);
document.getElementById("demo").innerHTML = object.email;
document.getElementById("demo").innerHTML = object.password;