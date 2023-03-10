const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('combined'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});