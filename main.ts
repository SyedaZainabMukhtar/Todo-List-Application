#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import Choice from "inquirer/lib/objects/choice.js";

let todos: string [] = [];
let condition = true;

console.log(chalk.bold.rgb(204, 204, 204)(`\n \t <<<<<<<<<<<==========================>>>>>>>>>>>>> `));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<========>>>  ${chalk.bold.bgHex(`#9999FF`)(`Welcome To Zainab - Todo-List Application`)} <<<=======>>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`\t<<<<<<<<<<<==========================>>>>>>>>>>>>>\n`));


// while(condition)
// {
//     let todoQuestion = await inquirer.prompt(
// [
//     {
//         name:"firstQuestion",
//         type: "input",
//         message: chalk.redBright("What do you want to add in your todo?"),
//     },
//     {
//         name:"secondQuestion",
//         type:"confirm",
//         message:chalk.redBright("Do you want to add more?"),
//         default:"true"
//     }
// ]
// );
// todos.push(todoQuestion.firstQuestion);
// console.log(todos)
// condition = todoQuestion.secondQuestion
// }

let main = async() => {
    while(condition){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices:[ "Add task", "Delete task", "View Todo-List", "Exit"]

            }
        ]);
        if (option.choice=== "Add task"){
            await addTask()
        }
        else if (option.choice === "Delete task"){
            await DeleteTask()
        }
        else if(option.choice ==="View Todo-List" ){
            await viewTask ()
        }
        else if(option.choice === "Exit"){
            condition = false;
        }
    }
}

let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name:"task",
            type: "input",
            message:"enter your new task :"
        }
    ]);
    todos.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully`);
}


let viewTask = async() => {  
     console.log("\n Your Todo-List: \n"); 
     todos.forEach((task, index) =>{
      console.log(`${index} : ${task}`)
    })
}


let DeleteTask = async() => {
    await viewTask()
    let taskIndex = await inquirer.prompt([
        {
            name:"index",
            type: "number",
            message:"Enter the 'Index no' you want to delete:",
        }    
    ]);
    let DeleteTask = todos.splice(taskIndex.index, 1);
    console.log(`\n ${DeleteTask}, this task has been deleted successfully from your Todo-List`)
}

main();