'use strict';

var cat = {
    name: {first : 'Mila', last : 'Liberatore'},
    color: 'White',
    age:12 
}

Object.defineProperty(cat, 'fullName',
    {
        get: function () {
            return this.name.first + ' ' + this.name.last;
        }
    },
    {
        set : function (value) {
            var nameParts = value.split('');
            this.name.first = nameParts[0];       
            this.name.last = nameParts[1];   
        }
    }
)