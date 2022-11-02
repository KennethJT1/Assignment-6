import express, { Request, Response, NextFunction, Application} from 'express';
import userRoutes from './routes/route';
import bodyParser from 'body-parser';
// const sequelize = require('../database');

//to create the database
// sequelize.sync({ force: true}).then(() => console.log('db is ready'))

const app: Application = express()

app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))

app.use


app.use(express.static('public'))

app.use('/css', express.static(__dirname + '/public/css'))
app.use('/img', express.static(__dirname + '/public/img'))

// view engine setup for ejs
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/', userRoutes)
app.use('/login', userRoutes)
app.use('/', userRoutes)



app.listen(3000, ()=>{
    console.log("Server has started running at port 3000")
})

