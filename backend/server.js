const express = require('express')
const gun = require('gun')
const app = express()
const port = 5000
app.use(Gun.serve)

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
Gun({web: server})