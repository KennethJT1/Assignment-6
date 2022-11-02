import express from "express";
import { Sequelize } from "sequelize";
import path from "path";



const User = require('./database/databaseSettings')
const sequelize = require('./database/databaseSettings');

const app = express()
const port = process.env.PORT || 3232

app.use(express.urlencoded({extended: true}))
app.use(express.json())

sequelize.sync().then(() => console.log('db is ready')) //{ force: true}

//To be able to use css and images
app.use(express.static('public'))

app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/public/images/", express.static("/public/images/"));


// //view engine setup for ejs
app.set("views", path.join(__dirname, "..", "views"));
app.set("view engine", "ejs");


app.get('/', (req, res) => {
    res.render('login')
})

app.get('/signup', (req, res) => {
    res.render('signup')
})


//To CREATE a POST route
app.post('/hotels', async (req, res) =>{
    await User.create(req.body);
    res.send('User has been created')
});

//To GET a lists of users
app.get('/hotels', async (req, res) => {
    const users = await User.findAll();
    res.send(users)
});

//To GET a lists of user
app.get('/hotels/:id', async (req, res) => {
    const requestedId = req.params.id;
    const user = await User.findOne({ where: { id: requestedId }});
    res.send(user)
});

//To UPDATE a user
app.put('/hotels/:id', async (req, res) => {
    const requestedId = req.params.id;
    const user = await User.findOne({ where: { id: requestedId }});

    user.fullName = req.body.fullName ;
    user.email = req.body.email ;
    user.phoneNumber = req.body.phoneNumber ;
    user.password = req.body.password ;
    user.image = req.body.image ;
    user.address = req.body.address ;
    user.price = req.body.price ;
    user.numOfBeds = req.body.numOfBeds ;
    user.numOfBaths = req.body.numOfBaths ;
    user.rating = req.body.rating;

    await user.save();
    res.send('Updated file')
});

//To DELETE a data 
app.delete('/hotels/:id', async (req, res) => {
    const requestedId = req.params.id;
    await User.destroy({ where: { id: requestedId}})
    res.send('It has been removed from database')
});

app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`)
})