'use strict';


var Task = function (name) {
    this.name = name;
    this.completed = false;

    //Perchè usare il prototype al posto dell funzioni all'interno dell'oggetto?
    //Perchè usando il prototype quando tu inizializzi un nuovo oggetto Task
    //Questo punta al __proto__ e quindi non crea una COPIA delle funzioni 
    //nell'oggetto stesso

    // this.complete = function () {
    //     console.log('Completing task: ' + this.name);
    //     this.completed = true;
    // }

    // this.save = function () {
    // }
}

Task.prototype.complete = function(){
    console.log('Completing task: ' + this.name);
    this.completed = true;
}
Task.prototype.save = function(){
    console.log('Saving Task: ' + this.name);
}

var task1 = new Task('Create a demo for constructors');
var task2 = new Task('Create a demo for modules');
var task3 = new Task('Create a demo for singleton');
var task4 = new Task('Create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();