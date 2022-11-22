const nunjucks = require('nunjucks');
const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 3000;                  //Save the port number where your server will be listening
const employee = require('./Database/Employee')
nunjucks.configure('Pages', {

    express: app

});

app.set('view engine', 'njk');

app.get('/viewroles',  async (req, res) =>  {
    var s = await employee.viewjobroles()
    res.render('viewroles', { roles: s.data })
})

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});