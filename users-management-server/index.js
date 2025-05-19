const express = require('express');
const app = express();
const cors = require('cors');
//get dynamic port from env file provided by hosting
const port = process.env.PORT || 3000;

app.use(cors());
//middleware to parse body data of type json
app.use(express.json());

app.get('/', (req, res)=>{
  res.send("user server is running...");
})

const users = [
  {id: 1, name:"kabane", email:"kabina@ne.com"},
  {id: 2, name:"kabila", email:"kelbina@ne.com"},
  {id: 3, name:"nabila", email:"jabina@ne.com"},
  {id: 4, name:"sabila", email:"abina@ne.com"}
]

app.get('/users', (req, res)=>{
  res.send(users);
})

app.post('/users', (req, res)=> {
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  res.send(newUser);
  users.push(newUser);
})

app.listen(port, ()=>{
  console.log(`Example app listening on port ${port}`);
})