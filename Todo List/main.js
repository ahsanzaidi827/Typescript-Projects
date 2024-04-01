#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to Todo List App");
let todos = [];
let loop = true;
while (loop) {
    let todoList = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what you want to add in your Todos?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more Todos?",
            default: "false",
        },
    ]);
    let { todo, addMore } = todoList;
    console.log(todoList);
    loop = addMore;
    if (todo) {
        todos.push(todo);
    }
    else {
        console.log("Kindly enter valid input");
    }
    console.log(todos);
    if (todos.length > 0) {
        console.log("your todo list:");
        todos.forEach((todo) => {
            console.log(todo);
        });
    }
    else {
        console.log("Not found");
    }
}
