const express = require('express')
//const path = require('path')

const app = express()

//const publicDirectoryPath = path.join(__dirname, '../public')

//app.use(express.static(publicDirectoryPath))

const port = process.env.PORT || 3000

app.get('',(req,res)=>{
    res.send("<h1>Mahabharath</h1>")
})


app.listen(port, ()=>{
    console.log('Server is up on port'+port)
})