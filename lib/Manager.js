// import parent class
const Employee = require("./Employee")

// create Manager Class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Send data to parent class constructor
        super(name, id, email);
        this.officeNumber = parseInt(officeNumber);
        this.role = 'Manager';
        // Validate officeNumber to make sure it's a number
        if (!this.isNumber(officeNumber)) throw new Error("Invalid Office Number");
    }
    // Validate function to check if input is a number
    isNumber(num) {
        if (parseInt(num)) {
            return true;
        } else {
            return false
        }
    }
    // Function to return office number
    getOfficeNumber() {
        return this.officeNumber;
    }
}

// Export Manager class
module.exports = Manager;