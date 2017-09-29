'use strict';

var Repo = require('./taskRepository');

class Task {
    constructor(data){
        this.name = data.name;
        this.completed = false;
    }

    complete(){
        console.log('Completing task: ' + this.name);
        this.completed = true;
    
    }

    save(){
        console.log('Saving Task: ' + this.name);      
        Repo.save(this);  
    }
}

module.exports = Task;