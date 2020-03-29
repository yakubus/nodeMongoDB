const express = require('express')
const port = 4200

const app = express()
app.set('view engine', 'hbs')

app.get('/', function(req, res){
    res.render('index',{
         title: "nmgoDb",
         pagebody: "to jest szablon do strony z punktacją"
    })
})

const button = document.getElementById('button');
button.addEventListener('click', function(e) {
  console.log('button was clicked');
});


app.get('/mongo', function(req, res){
    res.send('hello mongo')
})

app.listen(port)