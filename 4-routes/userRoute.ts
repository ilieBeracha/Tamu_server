import express from 'express';
import { allUsers, postNewUser } from '../3-logic/usersLogic';
import cors from 'cors'
export const UserRoute = express.Router();

UserRoute.post('/users',cors({
    // origin: ['http://localhost:3000', 'http://localhost:3001']
}), async (req, res) => {
    try{
        const fullname = req.body.fullname;
        const email = req.body.email;
        const phone = req.body.phone;
        
        // console.log(req.body)
        
        await postNewUser(fullname, email, phone);
        res.send('posted')
    } catch(e){
        console.log(e)
    }
});

UserRoute.get('/users', async (req, res) => {
    const users = await allUsers();
    res.json(users)
})