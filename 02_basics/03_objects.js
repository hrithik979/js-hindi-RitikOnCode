// Singleton

// object literals


const JsUeser = {
    name:"Hitesh",
    "full name":"hitesh kumar",
    age:18,
    location: "jaipur",
    email:"hitesh@google.com",
    isLoggenIn: false,
    lastLoginDays : ["Monday", "Saturday"]
}

//console.log(JsUeser.email);

//console.log(JsUeser['email']);


JsUeser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUeser)
JsUeser.email = "hitesh@microsoft.com"
//console.log(JsUeser);




JsUeser.greeting = function (){
    //console.log("hello Js user")
    
}

//console.log(JsUeser.greeting);


