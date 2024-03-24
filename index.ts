import inquirer from 'inquirer';

const answers = await inquirer.prompt([
    {
        message:"enter your num1",
        type:"number",
        name:"firstNum"
    },
    {
        message:"enter your num2",
        type:"number",
        name:"secondNum"
    },
    {
        message:"which operation do you want to perform!",
        type:"list",
        name:"operations",
        choices:["addition","subtraction","multiplication","division"]
    }
]);

if (answers.operations === "addition"){
    console.log(answers.firstNum+answers.secondNum);
}
else if (answers.operations === "subtraction"){
    console.log(answers.firstNum - answers.secondNum);
}
else if (answers.operations === "multiplication"){
    console.log(answers.firstNum*answers.secondNum);
}
else if (answers.operations === "division"){
    console.log(answers.firstNum/answers.secondNum);    
}
else{
    console.log("your answer is not valid.Please! make sure to use the correct value and type");
}