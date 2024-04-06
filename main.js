#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
console.log(chalk.bold.rgb(204, 204, 204)(`\n \t <<<<<<<<<<<==========================>>>>>>>>>>>>> `));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<========>>>  ${chalk.bold.bgHex(`#9999FF`)(`Welcome To Zainab - Todo-List Application`)} <<<=======>>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`\t<<<<<<<<<<<==========================>>>>>>>>>>>>>\n`));
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Add task", "Delete task", "Update task", "View Todo-List", "Exit"],
            }
        ]);
        if (option.choice === "Add task") {
            await addTask();
        }
        else if (option.choice === "Delete task") {
            await DeleteTask();
        }
        else if (option.choice === "Update task") {
            await UpdateTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            condition = false;
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "enter your new task :"
        }
    ]);
    todos.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully`);
};
let viewTask = async () => {
    console.log("\n Your Todo-List: \n");
    todos.forEach((task, index) => {
        console.log(`${index} : ${task}`);
    });
};
let DeleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'Index no' you want to delete:",
        }
    ]);
    let DeleteTask = todos.splice(taskIndex.index, 1);
    console.log(`\n ${DeleteTask}, this task has been deleted successfully from your Todo-List`);
};
let UpdateTask = async () => {
    await viewTask();
    let Update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "enter the 'index number' of the task you want to updae:"
        },
        {
            name: "new_task",
            type: "input",
            message: "Now enter new task name:"
        }
    ]);
    todos[Update_task_index.index] = Update_task_index.new_task;
    console.log(`\n Task at index number ${Update_task_index.index} updated successfully [for updated list check option: "View Todos-list"]`);
};
main();
