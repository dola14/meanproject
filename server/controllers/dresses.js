var mongoose = require("mongoose");
var Dress = mongoose.model("Dress");

module.exports = {

    create: function(req, res){
		console.log('fourth: create function Dress controller /server/controllers/dresses.js');		
		Dress.create(req.body, function(err, dress){
			console.log("sending json back to dress factory check browser console")				
			if(err){
				// console.log(err);
				res.json({error: true, errors: err});
			} else {
				res.json(dress);
			}
		})
    }
}    
