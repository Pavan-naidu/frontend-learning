let name = "pavan";
let age = 25;
console.log(name);
console.log(age);

// Function 

function add(a, b){
    return a + b;
}

console.log('Addition: ' + add(1,2));

// Array 
let fruits = ["Apple", "Bannana", "Orange"];
console.log("Fruits: " + fruits);


// Object
 let person = {
    name: "pavan",
    Course: "Full Stack Development",
    isActive: true
 };

 console.log("Student Object:", person);

//  Counter App Logic

let count = 0;

function increase(){
    count++;
    document.getElementById("count").innerText = count;
}

function decrease(){
    count--;
    document.getElementById("count").innerText = count;
}

function reset(){
    count = 0;
    document.getElementById("count").innerText = count;
}

 
 