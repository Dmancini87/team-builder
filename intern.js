const Employee = require("./employee.js")

class intern extends Employee{
    constructor(name, id, email, school){
        this.school = school;
    }
    
    getschool(){
        console.log(`the Employee's school is ${this.school}`)
    }
}