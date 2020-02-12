const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const bd = require('./database');

const app = express();

// Importing routes
const productRoutes = require('./routes/product');
const purchaseRoutes = require('./routes/purchase');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({entended: false}));
app.use(bodyParser.json());

// Routes
app.use('/', productRoutes);
app.use('/', purchaseRoutes);

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})