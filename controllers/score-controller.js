import Knex from "knex";
import Knexfile from "../knexfile.js";
const knex = Knex(Knexfile.development);


export async function playlistScores(req, res){
    const {playlist} = req.params
    console.log(playlist)
    try {
        //get scores for individual playlist
        const scores = await knex("scores").select("*").where({playlist_id: playlist})
        console.log(scores)

        //return results to client
        res.status(200).json(scores)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

export async function postScore(req, res){
    const {username, score, playlist_id} = req.body
    console.log(username, score, playlist_id)
    try {
        //get user id
        const userArr = await knex("users").select("id").where({username: username})
        const user_id = userArr[0].id
        console.log("user id:", user_id)
        //save score to database
        const response = await knex("scores").insert({user_id: user_id, score, playlist_id: playlist_id})

        //send confirmation
        res.status(201).send("score has been saved in the database")
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}