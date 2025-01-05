const express = require('express');

const app = express();

app.use(express.json());


var users = []

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.get('/users', (req, res) => {
    console.log(users);
    res.send(users);
}
);


app.post('/users', (req, res) => { 
    users.push(req.body);
    res.send('Data added successfully');
}
);


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
