const Employee = require("./employee.js")

class Engineer extends Employee{
    constructor(name, id, email, github){
        this.github = github;
    }
    
    getGithub(){
        console.log(`the Employee's Github is ${this.github}`)
    }
}