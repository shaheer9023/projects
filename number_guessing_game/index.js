import inquirer from "inquirer";
let number = await inquirer.prompt([{
        type: "input",
        name: "Number",
        message: "Enter number",
    }]);
let random_number = Math.floor(Math.random() * 10 + 1);
console.log(random_number);
if (number.Number == random_number) {
    console.log("number matched");
}
else if (number.Number < random_number) {
    console.log("number is small try greater number");
}
else if (number.Number > random_number) {
    console.log("number is large try smaller number");
}
else {
    console.log("Invalid!!");
}
