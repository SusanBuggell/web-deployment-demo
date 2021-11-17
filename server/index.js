require('dotenv').config()
const express = require('express');
const app = express();

//default folder for searching for files
app.use(express.static('client'));

//send back root domain .html file
app.get('/', (req,res) =>{
    res.sendFile('index.html');
});



const port = process.env.PORT || process.env.SERVER_PORT;

app.listen(port, ()=> console.log(`Server is up and up and running on port: ${port}`))
