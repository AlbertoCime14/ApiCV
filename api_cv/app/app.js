const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan'); //Morgan is used for logging request details
var cors = require('cors'); //Package to connect middle-ware or cross-platform applications
const path = require('path');

const app = express(); //wrapping the new express application in app variable 
//const App= express();
app.use(express.static(path.join(__dirname, 'files')));
app.set('trust proxy', true);

app.get('/', (req, res) => {
        res.send('Welcome to API test Epam')
    })
    

//express application using required packages 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

const userRoutes = require('./routes/account');


//express application using Routes from this application
//routes for user info cv
app.use('/api_v1/user', userRoutes);



module.exports = app;