
    /*               set up                */
    var express  = require('express');
    var app      = express();                               // create the app
    var mongoose = require('mongoose');                     // Mongo DB
    var port     = process.env.PORT || 8001;                // port 
    var morgan = require('morgan');                         // log requests to the console
    var bodyParser = require('body-parser');                // parse the req body
    var methodOverride = require('method-override');        // for DELETE and PUT 

    /*               configuration          */

    mongoose.connect('mongodb://localhost');                // connecting to the MongoDB running locally at port 27017

    app.use(express.static(__dirname + '/public'));                 
    app.use(morgan('dev'));                                         
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

    /*               Define model           */

    var Todo = mongoose.model('Todo', {
        text : String,
        done : Boolean
    });

    /*                   Creating API routes                 */

    // GET
    app.get('/api/todos', function(req, res) {

        Todo.find(function(err, todos) {

            
            if (err)
                res.send(err)

            res.json(todos); 
        });
    });

    // POST
    app.post('/api/todos', function(req, res) {

        
        Todo.create({
            text : req.body.text,
            done : false
        }, function(err, todo) {
            if (err)
                res.send(err);

            // return all the todos in the DB
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });

    });

    // DELETE
    app.delete('/api/todos/:todo_id', function(req, res) {
        Todo.remove({
            _id : req.params.todo_id
        }, function(err, todo) {
            if (err)
                res.send(err);

           // return all todos after the operation
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });
    });

    /*              Adding route for front end application             */
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the index.html file
    });


    /*               server listening on port 8001               */
    app.listen(port);
    console.log("App listening on port " + port);
   // console.log("This is my mongoDB");
