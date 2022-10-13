let express =require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db')

//express route

const registerRoute = require('../backend/routes/register.route');


//mongodb database connection

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser : true
}).then(()=> {
    console.log('Database Successfully connected')
},
error => {
    console.log('Could not connect to the database'+error)
})

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/register',registerRoute)

//port

const port = process.env.PORT || 4000;
const server = app.listen(port, ()=> {
    console.log('connected to the port' + port)
})

//not found error
app.use((req,res,next) => {
    // eslint-disable-next-line no-undef
    next(createError(404));
})

app.use(function(err,req,res,next){
    console.error(err.message);
    if(!err.statusCode)err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})