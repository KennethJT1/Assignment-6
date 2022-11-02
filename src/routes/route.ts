import express, { Request, Response, NextFunction} from 'express'
import fs from 'fs';
import { HttpError } from 'http-errors';
// import { v4 as uuidv4 } from "uuid"; 


const router = express.Router()

interface Data {
    full_name: string,
    email: string,
    phone_number: string,
    password: string,
    confirm_password: string,
    id: number
}

let signupUser: Data[] = [];

//Creating a dynamic database
const dataBase = (data: string): void =>{
    fs.writeFile('database.json', data, 'utf-8', (err: any)=>{
        if(err) console.error('An error occurred')
        console.log('Successfully written to database')
        console.log(data)
    })
}


router.get('/', (req: Request, res: Response)=>{
    res.render('signup')
})

router.get('/login', (req: Request, res: Response)=>{
    res.render('login')
})

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

export default router