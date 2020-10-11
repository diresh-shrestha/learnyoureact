// Creates a small Express server that renders our React components.
// If someone navigates to /, it will render views/index.jsx.

const express = require('express');
const app = express();

app.set('port', process.argv[2] || 3000);
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine(
  'jsx',
  require('express-react-views').createEngine({ transformViews: false })
);

require('babel/register')({
  ignore: false,
});

app.use('/', (req, res) => {
  res.render('index', '');
});

app.listen(app.get('port'), () => {
  console.log('Express server is up on port 3000');
});
