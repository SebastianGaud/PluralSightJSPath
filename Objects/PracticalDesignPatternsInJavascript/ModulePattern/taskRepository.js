'use strict';

class Repo {
    
    get(id){
        console.log('Getting task ' +  id);
        return{
            name: 'New Task from db'
        } 
    }

    save(task){
        console.log('Saving ' + task.name + ' to the db');
    }
}


module.exports = new Repo();