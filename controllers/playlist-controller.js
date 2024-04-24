import Knex from "knex";
import Knexfile from "../knexfile.js";
const knex = Knex(Knexfile.development);


export async function getPlaylists(req, res){

    try {
        const playlists = await knex("playlists").select("*")
        res.status(200).json(playlists)

    }catch(err){
        console.log(err)
        res.status(500).send("Something has gone awry")
    }


}