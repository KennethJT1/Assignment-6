"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const User = require('./database/databaseSettings');
const sequelize = require('./database/databaseSettings');
const app = (0, express_1.default)();
const port = process.env.PORT || 3232;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
sequelize.sync().then(() => console.log('db is ready')); //{ force: true}
//To be able to use css and images
app.use(express_1.default.static('public'));
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public")));
app.use("/public/images/", express_1.default.static("/public/images/"));
// //view engine setup for ejs
app.set("views", path_1.default.join(__dirname, "..", "views"));
app.set("view engine", "ejs");
app.get('/', (req, res) => {
    res.render('login');
});
app.get('/signup', (req, res) => {
    res.render('signup');
});
//To CREATE a POST route
app.post('/hotels', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield User.create(req.body);
    res.send('User has been created');
}));
//To GET a lists of users
app.get('/hotels', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User.findAll();
    res.send(users);
}));
//To GET a lists of user
app.get('/hotels/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const requestedId = req.params.id;
    const user = yield User.findOne({ where: { id: requestedId } });
    res.send(user);
}));
//To UPDATE a user
app.put('/hotels/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const requestedId = req.params.id;
    const user = yield User.findOne({ where: { id: requestedId } });
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.phoneNumber = req.body.phoneNumber;
    user.password = req.body.password;
    user.image = req.body.image;
    user.address = req.body.address;
    user.price = req.body.price;
    user.numOfBeds = req.body.numOfBeds;
    user.numOfBaths = req.body.numOfBaths;
    user.rating = req.body.rating;
    yield user.save();
    res.send('Updated file');
}));
//To DELETE a data 
app.delete('/hotels/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const requestedId = req.params.id;
    yield User.destroy({ where: { id: requestedId } });
    res.send('It has been removed from database');
}));
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
