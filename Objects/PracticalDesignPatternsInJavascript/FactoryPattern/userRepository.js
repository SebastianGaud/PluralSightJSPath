'use strict';

/** 
 * 
 * @method get(id)
 * @method save(user)
 * 
*/
class UserRepository {
    get(id){
        console.log('Getting user ' +  id);
        return{
            name: 'New user from db'
        } 
    }

    save(user){
        console.log('Saving ' + user.name + ' to the db');
    }
}


module.exports = new UserRepository();