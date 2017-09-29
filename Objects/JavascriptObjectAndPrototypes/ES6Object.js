'use strict';

class Cat {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    speak()  {
        display('Meowwww');
    }
}

var cat = new Cat('Mila', 'Orange');

cat.speak();