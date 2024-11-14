const express = require('express');
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4200

app.listen(port, ()=>{
    console.log(`gbera on port ${port}`);
    
})

app.get('/', (req, res) => {
    res.send('Hello World');
    
});