const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req.query, "query")
    res.header('Content-Type', 'application/json')
    res.jsonp({user: 'tobi'})
    
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})