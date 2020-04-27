const path = require('path')
const express = require('express')
const cors = require('cors')
const hbs = require('hbs')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.use(cors())
app.use(express.static(publicDirectoryPath))

// var corsOptions = {
//     origin: 'https://storage.cloud.google.com/coa_bucket/'
// }

app.get('', (req, res) => {
    res.render('index', {
        
    })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server is up on port 5000.')
})