/* require modules */
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

/* Middlewares config */
app.use(express.static('public'));
app.use(expressLayouts);
const __dirname = path.resolve(path.dirname(''));

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World app!')
});

app.get('/outra', (req, res) => {
  res.send('Hello World app 2!')
});

app.get("/hello", (req, res) => {
  let number = Math.random();

  res.render("hello", { randomNumber: number });
});



app.listen(3000, () => {
  console.log('server started');
});