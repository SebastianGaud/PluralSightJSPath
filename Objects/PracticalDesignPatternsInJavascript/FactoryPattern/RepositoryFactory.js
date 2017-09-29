'use strict';

class RepositoryFactory{
    constructor(){
        var repos = this;
        var repoList= [
            {
                name :'task',
                source : '../ModulePattern/taskRepository'
            },
            {
                name : 'user',
                source: './userRepository'
            },
            {
                name: 'project',
                source: './projectRepository'
            }
        ];


        /*
            Per ogni repo all'interno di repolist 
            aggiungo una property alla classe
            che instanzia un repository
        */ 
        repoList.forEach(function (repo) {
            repos[repo.name] = require(repo.source);
        });
    }
}

module.exports = new RepositoryFactory();