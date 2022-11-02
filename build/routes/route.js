"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
// import { v4 as uuidv4 } from "uuid"; 
const router = express_1.default.Router();
let signupUser = [];
//Creating a dynamic database
const dataBase = (data) => {
    fs_1.default.writeFile('database.json', data, 'utf-8', (err) => {
        if (err)
            console.error('An error occurred');
        console.log('Successfully written to database');
        console.log(data);
    });
};
router.get('/', (req, res) => {
    res.render('signup');
});
router.get('/login', (req, res) => {
    res.render('login');
});
// router.post('/create', (req: Request, res: Response)=>{
//     const user = JSON.parse(req.body);
//     let msg: Data[];
//     req.o
//     const id = signupUser.length + 1;
//     signupUser.push({...user, id})
//     console.log(req.body)
//     dataBase(JSON.stringify(signupUser))
//     //  res.render(signupUser)
//     res.send(`User with this ${user.full_name} was created`)
// })
exports.default = router;
