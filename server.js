// const {json } = require('express');
const express = require('express');
const app = express();
const helper = require('./helper')

// app.use(json)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// get Router
app.post('/',helper.savebook)
//get all books

app.get('/',helper.getbooks)
//get single book
app.get('/:id',helper.getbook)
//edit single book

app.put('/:id',helper.editbook)
// deletebook
app.delete('/:id',helper.deletebook)

let port = 3000;
app.listen(port,()=>{
    console.log(`server is at your service on port ${port}`)

})
