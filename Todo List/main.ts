import inquirer from "inquirer";


let todoList = [];  //To add task in future
let condition = true;

console.log("Welcome to my Todo-List");

//Now we use While Loop to add task by user input until the user add task in it

while (condition){  //when my condition will be true

let AddTask = await inquirer.prompt(   //Now store a value to save a user input data in AddTask
    [
        {
           name : "Task",
           message : "Add your new task",
           type : "input",

        }
    ]
); 
//"Push Method"  to add something like task, product, etc

 todoList.push(AddTask.Task); //Whatever the task added by user in AddTask, will be added in todoList through push method
 console.log(AddTask.Task + " added to the Todo-List"); //Print message that task added to the Todo-List



 let AddmoreTask = await inquirer.prompt( //Now we store a value to save a user input for Add more task in AddmoreTask
    [
        {
            name : "Addmore",
            message : "Do you want to add more task?",
            type : "confirm", //This will print as yes/no, So if yes then above while loop condition will run
            default : "false",
        
        }
    ]
);
condition = AddmoreTask.Addmore
}

console.log( "Your updated Todo-List:" , todoList);



