function Animal(voice) {
    this.voice = voice || 'I am an animal';
}

Animal.prototype.speak = function () {
    console.log(this.voice);
}


function Cat(name, color) {
    Animal.call(this, 'Meow');
    this.name = name;
    this.color = color;
}

//Aniam è il costruttore di Cat però in realtà l'oggetto
//è animal
Cat.prototype = Object.create(Animal.prototype);

//Cat è diventato il costruttore di Cat
Cat.prototype.constructor = Cat;

var mila = new Cat('Mila', 'Orange');

mila.speak();
