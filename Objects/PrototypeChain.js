    'use strict';

    class Animal{
        constructor(voice){
            this.voice = voice || 'I am an animal';
        }

        speak(){
            return this.voice;
        }
    }

    
    class Cat extends Animal{
        constructor(name, color){
            super('Meow');
            this.name = name;
            this.color = color;
        }
    }

    var mila = new Cat('Mila', 'Orange');

    console.log(mila.speak());