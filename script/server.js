const app = require('express')()
const path = require('path')
app.listen('3000')
app.route('/').get((req,res)=>res.sendFile(path.join(__dirname+'/../index.html')))