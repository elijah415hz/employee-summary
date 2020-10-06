// Import parent class
const Employee = require("./Employee")

// Create Engineer Class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Send data to parent class constructor
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
    }
    // Function to return github
    getGithub() {
        return this.github;
    }
}

// Export Engineer Class
module.exports = Engineer;