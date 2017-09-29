'use strict';

var arr = ['red', 'blue', 'green'];

//Ho aggiunto una proprietà solo a questo array
Object.defineProperty(arr, 'last', 
    {
        get: function () {
        return this[this.length-1];
        }
    }
)

//Aggiunto la property last a tutti gli array  
Object.defineProperty(Array.prototype, 'last', 
{
    get: function () {
    return this[this.length-1];
    }
}
)

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

var mila = new Cat('Mila', 'Orange');

console.log(Cat.prototype);
console.log(mila.__proto__);
console.log(Cat.prototype === mila.__proto__);


