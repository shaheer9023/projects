// // modules
// // for package.json(npm init -y)
// // for package-lock.json(npm i @types/node -D)
// // toget input from user(npm install inquirer)
// // for the working of all of above ..open tsconfog.json and got to target:make sure its target:"2020"
// // and "module";
import inquirer from "inquirer";
const question = await inquirer.prompt([
    {
        type: "input",
        name: "num1",
        message: "enter 1st number",
    },
    {
        type: "input",
        name: "num2",
        message: "enter 2nd number",
    },
    {
        type: "list",
        name: "operator",
        message: "select operator",
        choices: ["+", "-", "*", "/"],
    },
]);
function sum(num1, num2) {
    return Number(num1) + Number(num2);
}
function difference(num1, num2) {
    return Number(num1) - Number(num2);
}
function product(num1, num2) {
    return Number(num1) * Number(num2);
}
function division(num1, num2) {
    return Number(num1) / Number(num2);
}
if (question.operator == "+") {
    console.log(`sum of given two numbers is ${sum(question.num1, question.num2)}`);
}
else if (question.operator == "-") {
    console.log(`difference of given two numbers is ${difference(question.num1, question.num2)}`);
}
else if (question.operator == "*") {
    console.log(`product of given two numbers is ${product(question.num1, question.num2)}`);
}
else if (question.operator == "/") {
    console.log(`division of given two numbers is ${division(question.num1, question.num2)}`);
}
else {
    console.log("INVALID !!!");
}
;
