// import Knex from "knex";
// import {Knexfile} from "../knexfile.js";
// const knex = Knex(Knexfile.development);


export async function playlistScores(req, res){

    try {
        //get scores for individual playlist
        //get playlist name
        const {playlist} = req.params

        //get playlist scores with Knex

        //return results to client
        res.status(200).send("here is the scores for an individual playlist")
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

export async function postScore(req, res){

    try {
        //save score to database
        //get information from body of request

        //save score into database

        //send confirmation
        res.status(201).send("score has been saved in the database")
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}