// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")
const app = require("../app")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
        if (!this.isNumber(officeNumber)) throw new Error("Invalid Office Number");
    }
    isNumber(num) {
        if (parseInt(num)) {
            return true;
        } else {
            return false
        }
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;