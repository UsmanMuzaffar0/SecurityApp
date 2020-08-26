var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
const { json } = require('body-parser');


app.use(bodyParser.json({type: 'application/json'}));

var router = express.Router();

//socket.io chat.....

const users ={};
let currentUserId = 2;

function createUserAvatarUrl() {
    const rand1 = Math.round(Math.random() * 200 + 100); 
    const rand2 = Math.round(Math.random() * 200 + 100); 
    return `https://placeimg.com/${rand1}/${rand2}/people`;
}

const io = require("socket.io")();
const messageHandler = require("./handlers/message.handler");


io.on("connection", socket =>{
    console.log("user connected!!");
    console.log(socket.id);
    users[socket.id] = {userId: currentUserId++};
    socket.on("join", username => {
        users[socket.id].username = username;
        users[socket.id].avatar = createUserAvatarUrl();
        messageHandler.handleMessage(socket, users);
    });
});
io.listen(3001);


//nodejs
app.use(bodyParser.urlencoded({extended: true}));

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users_db'
});

var server = app.listen(9090, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("server start");
});

connection.connect(function(error){
    if(!!error) console.log('error');
    else console.log('connected');
});

//User Signup
app.post('/register-user', function(req,res){
    connection.query('INSERT INTO users SET ?', req.body, function(error, rows, fields){
        if(!!error) console.log('error');
        else{
            console.log(rows);
            res.send(JSON.stringify(rows));
        } 
    });
})




//User Login
app.post('/users',function(req,res,next){
    var phone_number = req.body.phone_number;
    var password = req.body.password;
    connection.query("SELECT * FROM users WHERE phone_number = ? AND password = ?",[phone_number,password], function(err,row,fields){
        if(err) console.log(err);
        if(row.length > 0){
            res.send({'success' : true, 'role': row[0].role, 'message':'Data Coming!'});
        }
        else{
            res.send({'success' : false, 'message': 'User not found! please try again!'});
        }
    }); 
});





//Resident Complaints store
app.post('/complaint', function(req,res){
    connection.query('INSERT INTO rcomplaints SET ?', req.body, function(error, rows, fields){
        if(!!error) console.log('error');
        else{
            console.log(rows);
            res.send(JSON.stringify(rows));
        } 
    });
})

//Admin get complaints
app.get('/rcomplaint', function(req,res){
    connection.query('SELECT * FROM rcomplaints', function(error, rows, fields){
        if(!!error) console.log('error');
        else{
            console.log(rows);
            res.send(rows);
        }
    });
})

//Resident Suggestion store
app.post('/rsuggestion', function(req,res){
    connection.query('INSERT INTO rsuggestions SET ?', req.body, function(error, rows, fields){
        if(!!error) console.log('error');
        else{
            console.log(rows);
            res.send(JSON.stringify(rows));
        } 
    });
})

//Admin get Suggestions
app.get('/rsuggestion', function(req,res){
    connection.query('SELECT * FROM rsuggestions', function(error, rows, fields){
        if(!!error) console.log('error');
        else{
            console.log(rows);
            res.send(rows);
        }
    });
})

//get users from admin Site
app.get('/users', function(req,res){
    connection.query('SELECT * FROM users WHERE role=? OR role=?',['R','S'], function(error, rows, fields){
        if(!!error) console.log('error');
        else{
            console.log(rows);
            res.send(rows);
        }
    });
})

// delete users from admin

app.delete('/users/:id', function(req, res){
    console.log(req.params.id);
    connection.query('DELETE FROM users WHERE id=?', req.params.id, function(error, rows, fields){
        if(!!error)
        console.log('error');
        else{
            console.log(rows);
            res.end('success delete!');
        }
    })
})
// delete rComplaints from admin

app.delete('/rcomplaint/:id', function(req, res){
    console.log(req.params.id);
    connection.query('DELETE FROM rcomplaints WHERE id=?', req.params.id, function(error, rows, fields){
        if(!!error)
        console.log('error');
        else{
            console.log(rows);
            res.end('success delete!');
        }
    })
})
// delete rSuggestion from admin

app.delete('/rsuggestion/:id', function(req, res){
    console.log(req.params.id);
    connection.query('DELETE FROM rsuggestions WHERE id=?', req.params.id, function(error, rows, fields){
        if(!!error)
        console.log('error');
        else{
            console.log(rows);
            res.end('success delete!');
        }
    })
})

//update Users

app.put('/users', function(req, res){
    var phone_number = req.body.phone_number;
    var name = req.body.name;
    var password = req.body.password;
    // console.log(req.param.phone_number);
    connection.query('UPDATE users SET name=?, password=? WHERE phone_number=?', [name,password,phone_number], function(error, rows, fields){
        if(error) throw error;
            console.log(rows);
            res.end(JSON.stringify(rows));
    })
})

//Records in Admin module

app.get('/getUserRecords', function(req,res){
    connection.query('SELECT * FROM users WHERE role=? OR role=?',['R','S'], function(error, rows, fields){
        if(!!error) console.log('error');
        else{
            console.log(rows);
            res.send(rows);
        }
    });
})