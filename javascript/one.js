// IIFE function...

(function(){
    console.log("Hello World")
})();

(()=>console.log("Hello world"))();

// With parameters
(function(name){
    console.log(`My name is ${name}`)
})("Harsh Patel");

((name)=>console.log(`My name is ${name}`))("Harsh Patel")

