import Knex from "knex";
import Knexfile from "../knexfile.js";
const knex = Knex(Knexfile.development);


export async function createUser(req, res){

    try {
        //get username
        const username = req.body
        console.log(req.body)
        console.log(username)
        //check if user exists

        //if username is available
        //create user

        res.status(201).send("user created")
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}