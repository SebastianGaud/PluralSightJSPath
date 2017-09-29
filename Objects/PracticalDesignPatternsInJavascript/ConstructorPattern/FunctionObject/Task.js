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


module.exports = Task;