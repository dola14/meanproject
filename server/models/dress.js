var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DressSchema = new mongoose.Schema({
   // userId: {type: Schema.Types.ObjectId, ref: 'User'},    
    name:  { type: String, required: true, minlength: 6},
    description: { type: String, required: true},
    originalprice: { type: Number, required: true},
    rentalprice: { type: Number, required: true},
    image: { type: String}
})

mongoose.model("Dress", DressSchema);