const path = require('path'); 
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const {engine} = require('express-handlebars');
const { dirname } = require('path');
const { urlencoded } = require('express');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded(
    {
        extended:true
    }
));
app.use(express.json());

app.use(methodOverride('_method'));

//HTTP logger
app.use(morgan('combined'));

// app.engine('handlebars', exphbrs());
app.engine('hbs', engine(
    {
        extname: 'hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }
))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resource','views'));

//routes init
route(app);


app.listen(port, () => console.log(`App listening at http://localhost:${port}`))