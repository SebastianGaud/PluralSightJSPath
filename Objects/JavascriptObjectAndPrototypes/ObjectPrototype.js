'use strict';

var cat = Object.create(Object.prototype, {
    name: {
        value: 'Mila',

        //Rende la proprietà non eliminabile dall'oggetto
        //e previene la modifica del parametro enumerable
        configurable: true,

        //enumerable: false -> la proprietà non viene enumerata quindi
        //se per esempio dovessi iterare una collezione di gatti
        //name nnon verrebbe mostrata
        enumerable: false, 
        
        //writable: false -> la propietà diventa readonly ma non
        //i suoi figli es ( cat.name = 'Pallina' //ERRORE cat.name.first = 'Pallina' va bene)
        writable: true
    },
    color:{
        value: 'Orange',
        configurable: true,
        enumerable: true,
        writable: true
    }
})

console.log(cat);
