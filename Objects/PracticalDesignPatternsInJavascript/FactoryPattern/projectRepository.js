'use strict';

class ProjectRepository {
    get(id){
        console.log('Getting project ' +  id);
        return{
            name: 'New project from db'
        } 
    }

    save(project){
        console.log('Saving ' + project.name + ' to the db');
    }
}


module.exports = new ProjectRepository();