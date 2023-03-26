const { moduleExpression } = require("@babel/types");

class Employee {
    constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email =email
    }
    getname(){
        console.log(`the employee's name is ${this.name}`)
    }
    getid(){
        console.log(`the employee's id is ${this.id}`)
    }
}

module.exports = Employee;