const express = require('express');
const app = express();
//get dynamic port from env file provided by hosting
const port = process.env.PORT || 3000;


app.get('/', (req, res)=>{
  res.send("user server is running...");
})

app.listen(port, ()=>{
  console.log(`Example app listening on port ${port}`);
})