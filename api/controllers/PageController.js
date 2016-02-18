/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
    
    index : function(req,res){
        
        res.view('pages/index',{layout:"layout",titre:"ceci est un titre"});
    },
    
    noLayout : function(req,res){
      res.view('pages/noLayout',{layout:null})  
    },
};

