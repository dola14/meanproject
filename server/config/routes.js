var path = require('path')
var Dresses = require('../controllers/dresses.js');
module.exports = function(app) {
    app.post('/create', function(req, res){
        console.log(req.body, "Routes.js: this is the /create path");
       // res.json({status: true})
        Dresses.create(req, res);

    })

    

    app.all("*", (req,res,next) => {
        res.sendfile(path.resolve("./DressApp/dist/index.html"))
    })
}
