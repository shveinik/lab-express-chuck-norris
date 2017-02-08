const express = require('express');
const app = express();
const Chuck  = require('chucknorris-io');
const client = new Chuck();

app.set('views', __dirname + "/views");
app.set('view engine','ejs');


// app.get('/', function (req, res, next) {
//   console.log(req);
//   response.send('<p>Chuck</p>');
// });

app.get('/random', (req, res) => {
  client.getRandomJoke().then(function (response) {
    res.render('random',response);
  }).catch(function (err) {
    // console.log("Chuck Norris does not like errors");
  });
});

app.get('/categories', (req, res) => {
  client.getJokeCategories().then(function (response) {
    let data = {
      cats : response
    };
    res.render('categories',data);


    console.log(cats);
    // res.render('categories',cats);

}).catch(function (err) {
   // handle error
});

});

app.get('/categories/:categorie', (req, res) => {
  client.getRandomJoke(req.params.categorie).then(function (response) {
    res.render('joke-by-category',response);
  }).catch(function (err) {
    // console.log("Chuck Norris does not like errors");
  });
});






app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});
