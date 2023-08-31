const express = require('express');
const app = express(),
 bodyParser = require('body-parser');
 port = 3080;
 const users = [];
 app.use(bodyParser.json());
 app.get('/api/users',(req,res) => {
res.json(users);
 })

 app.post('/api/user',(req,res) => {
    users.push(req.body);
    res.json('user added' + req.body);
 })

 app.get('/',(req,res) => {
    res.send('app works!');
 })

 app.listen(port,() => {
    console.log(`Server listening on port no: ${port}`);
 })