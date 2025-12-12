//express-demo.js(CommonJs)
const express = require('express');
const app = express();

app.use(express.json());

let users = [{ id: 1, name: "Deepthi" }];

app.get('/users', (req, res)=> res.json(users));

app.post('/users',(req, res) => {
    const newUser = { id: users.length + 1, ...req.body};
    users.push(newUser);
    res.json(newUser);

});

app.listen(3001, ()=> console.log('Express demo running on port 3001'));