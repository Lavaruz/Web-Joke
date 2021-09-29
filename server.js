const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ejs = require('ejs')
const https = require('https')

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static('public'))
let b = 'Generate your jokes...'

const jokesURL = 'https://v2.jokeapi.dev/joke/Any?type=single'

app.get('/', function(req, res){
   
    res.render('index',{Test: b})

})
app.post('/', function(req, res){
    https.get(jokesURL, function(response){
        response.on('data', function(data){
            jokes = JSON.parse(data)
            b = jokes.joke
        })
    })
    res.redirect('/')
})

app.listen(3000)