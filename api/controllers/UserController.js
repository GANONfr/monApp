/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
    index : function(req,res){
        
        User.find({},function(err,users){
            if(err) return console.log(err);
            return res.view('user/index',{users:users});
        });
    }
};

