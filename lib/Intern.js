// Import parent class
const Employee = require("./Employee");

// Create Inter class
class Intern extends Employee {
    constructor(name, id, email, school) {
        // Send data to parent class constructor
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
    }
    // Function to return school
    getSchool() {
        return this.school;
    }
}

// Export Intern class
module.exports = Intern;