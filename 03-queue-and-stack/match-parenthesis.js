const Stack = require('./Stack');

let expression = "(a+b))*(y+z)";
let stack = new Stack();
let error = false;
for (let char of expression) {
    // char is a (
    if (char == '(') {
        stack.push('(');
    }
    else if (char == ')') {
        let removed = stack.pop();
        if (removed !='(') {
            console.log("error! Unmatched ( ");
            error = true;
            break;
        }
    }
}

if (stack.peek() == null && error==false) {
    console.log("All parethensis are paired")
} else {
    console.log("Error there is unpaired parethensis!")
}