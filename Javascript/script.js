
let name = "Ronny Scott";  
let age = 25;  
let isStudent = true;  
let hobbies = ["reading", "traveling", "coding"]; 
let person = { firstName: "John", lastName: "Doe" };  

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);


function calculator() {
    let firstNumber = parseFloat(prompt("Enter the first number:"));
    let secondNumber = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Invalid input. Please enter valid numbers.");
        return;
    }

    let result;

    switch (operation) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            if (secondNumber !== 0) {
                result = firstNumber / secondNumber;
            } else {
                alert("Cannot divide by zero.");
                return;
            }
            break;
        default:
            alert("Invalid operation.");
            return;
    }

    alert(`Result: ${result}`);
}


calculator();


function greetUser(name) {
    return `Hello, ${name}! Welcome to the JavaScript course.`;
}


let greetingMessage = greetUser("John");
let greetingElement = document.createElement("p");
greetingElement.textContent = greetingMessage;
document.body.appendChild(greetingElement);

let ageToVote = prompt("What is your age?");
if (ageToVote >= 18) {
    alert("You are eligible to vote!");
} else {
    alert("You are not eligible to vote.");
}


let ol = document.createElement("ol");
for (let i = 1; i <= 10; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    ol.appendChild(li);
}
document.body.appendChild(ol);


document.querySelector("h1").textContent = "JavaScript in Action!";


let dynamicContentDiv = document.getElementById("dynamic-content");
let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicContentDiv.appendChild(newParagraph);
