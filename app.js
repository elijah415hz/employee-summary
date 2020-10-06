// Import class files and required packages
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Assign absolute path and file name for saving created team.html
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Instatiate array to hold objects generated below
const employeeArr = [];

// Inquirer questions used for all classes
const initQuestions = [
    {
        type: "list",
        message: "What kind of employee would you like to add?",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"]

    },
    {
        type: "input",
        message: "Name: ",
        name: "name"
    },
    {
        type: "input",
        message: "ID: ",
        name: "id"
    },
    {
        type: "input",
        message: "Email Address: ",
        name: "email"
    }
];

// Question asked for managers
const ManagerQuestion = [
    {
        type: "input",
        message: "Office Number: ",
        name: "finalResponse"
    }
];

// Question asked for engineers
const EngineerQuestion = [
    {
        type: "input",
        message: "GitHub Username: ",
        name: "finalResponse"
    }
];

// Question asked for interns
const InternQuestion = [
    {
        type: "input",
        message: "School: ",
        name: "finalResponse"
    },

];

// Initialize the program and start asking questions
function init () {
    inquirer.prompt(initQuestions).then(response => {
        // Grab answers out of response
        const role = response.role;
        const name = response.name;
        const id = response.id;
        const email = response.email;
        // Instatiate variable to be filled in the switch case
        let finalQuestion;
        // Assign the final question based on type of employee
        switch (role) {
            case "Manager":
                finalQuestion = ManagerQuestion;
                employeeType = Manager 
                break;
                case "Engineer":
                    finalQuestion = EngineerQuestion;
                    employeeType = Engineer 
                    break;
                    case "Intern":
                        finalQuestion = InternQuestion;
                        employeeType = Intern 
                break;
            default:
                throw new Error("Role undefined")
        }
        // Ask final question
        inquirer.prompt(finalQuestion).then(finalResponse => {
            const final = finalResponse.finalResponse;
            // Instiate variable to be assigned in switch case
            let employee;
            // Create new employee objects
            switch (role) {
                case "Manager":
                    employee = new Manager(name, id, email, final);
                    break;
                case "Engineer":
                    employee = new Engineer(name, id, email, final);
                    break;
                case "Intern":
                    employee = new Intern(name, id, email, final);
                    break;
                default:
                    throw new Error("Role undefined");
            }
            // Add employee object to the employee array
            employeeArr.push(employee);
            // Ask if the user wants to continue adding employees
            inquirer.prompt([
                {
                    type: "list",
                    message: "Add another Employee?",
                    name: "continue",
                    choices: ["Yes", "No"]
                }
            ]).then(response => {
                if (response.continue === "Yes") {
                    // Call this function again and start asking questions
                    init();
                } else {
                    // Use render function in htmlRenderer.js to render an html string
                    const html = render(employeeArr);
                    // Save html string to a file
                    fs.writeFile(outputPath, html, "utf8", err => {
                        if (err) throw err;
                    })
                }
            })
        })
    })
}

// Call init() to get the party started
init();