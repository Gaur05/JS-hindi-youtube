// singleton
// Object.create // Object is known as singleton only when it is created by the constructor.

// object literals
const mySym = Symbol("key1")

// Values in object are stored in key-value pair.
const JsUser = {
    name: "Gaur",
    "full name": "Akshat Gaur",
    [mySym]: "mykey1",
    age: 18,
    location: "Delhi",
    email: "Gaur@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Gaur@chatgpt.com"
// Object.freeze(JsUser) // It is used to freeze the value of the object so that it will not change.
JsUser.email = "Gaur@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());