const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');
const dbConfig = require('./app/config/db.config');

const app = express();

var corsOptions = {
    credentials:true,
    origin: ['http://localhost:4200']
}

app.use(cors(corsOptions));

//parse request
app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(cookieSession({
    name: 'test-session',
    keys: ["COOKIE_SECRET"],
    httpOnly: true
}));

const db = require('./app/models');
const Role = db.role;

db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Successfully connected to MongoDB');
    initial();
})
.catch((err) => {
console.error('Connection error', err);
process.exit();
})

app.get('/',(req,res) => {
    res.json({message: 'application works!'});
});

//routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

const PORT = process.env.port | 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

function initial(){
    Role.estimatedDocumentCount(function(err,count){
        if(!err && count === 0){
new Role({
    name: 'user',
}).save(err => {
    if(err){
        console.log('error', err);
    }   
    console.log('added "User" to Roles collection');
});

new Role({
    name: 'moderator',
}).save(err => {
    if(err){
        console.log('error', err);
    }   
    console.log('added "Moderator" to Roles collection');
});

new Role({
    name: 'admin',
}).save(err => {
    if(err){
        console.log('error', err);
    }   
    console.log('added "admin" to Roles collection');
});
        }
    })
}



