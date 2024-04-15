import Knex from "knex";
import Knexfile from "../knexfile.js";
const knex = Knex(Knexfile.development);

const playlists = [
    {
        "name": "Viral Hits",
        "playlistId": "37i9dQZF1DX2L0iB23Enbq",
        "playlistImg": "https://i.scdn.co/image/ab67706f00000003d971c6c23114fc7636dc23eb"
    },
    {
        "name": "70's mix",
        "playlistId": "37i9dQZF1EQpVaHRDcozEz",
        "playlistImg": "https://seed-mix-image.spotifycdn.com/v6/img/seventies/3IYUhFvPQItj6xySrBmZkd/en/large"
    },
    {
        "name": "All Out 80's",
        "playlistId": "37i9dQZF1DX4UtSsGT1Sbe",
        "playlistImg": "https://i.scdn.co/image/ab67706f00000003fe154a455809e72e4d854880"
    },
    {
        "name": "90's Hits",
        "playlistId": "3C64V048fGyQfCjmu9TIGA",
        "playlistImg": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebbc47d6a6244a43c585ad705d2"
    },
    {
        "name": "worlds longest smoke break",
        "playlistId": "1qSQwiZA13xixRU8Rzacuz",
        "playlistImg": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebbf1bd499a6ad2e8c1628a6146"
    },
    {
        "name": "Blues Classics",
        "playlistId": "37i9dQZF1DXd9rSDyQguIk",
        "playlistImg": "https://i.scdn.co/image/ab67706f000000027500902fb0aa21f0bdb12cfd"
    },
    {
        "name": "Classic Rock Hits",
        "playlistId": "1ti3v0lLrJ4KhSTuxt4loZ",
        "playlistImg": "https://mosaic.scdn.co/640/ab67616d00001e0236caeed42195d1bbc2a90604ab67616d00001e0251c02a77d09dfcd53c8676d0ab67616d00001e02c5653f9038e42efad2f8a266ab67616d00001e02ebfe4419da90f76a5b278564"
    },
    {
        "name": "Hip Hop Mix",
        "playlistId": "37i9dQZF1EQnqst5TRi17F",
        "playlistImg": "https://seed-mix-image.spotifycdn.com/v6/img/hip_hop/1RyvyyTE3xzB2ZywiAwp0i/en/default"
    },
    {
        "name": "90's Hip Hop",
        "playlistId": "37i9dQZF1DX186v583rmzp",
        "playlistImg": "https://i.scdn.co/image/ab67706f00000002b5e5274fbae4bcf84bf57f69"
    },
    {
        "name": "Rap Bangers Only",
        "playlistId": "2xT3ZPE51ewIFa3dLLpkSa",
        "playlistImg": "https://mosaic.scdn.co/640/ab67616d00001e026aca031ccc27d2e4dd829d14ab67616d00001e02cdb645498cd3d8a2db4d05e1ab67616d00001e02d9194aa18fa4c9362b47464fab67616d00001e02f54b99bf27cda88f4a7403ce"
    },
    {
        "name": "Musicals",
        "playlistId": "0ER0xAgCLXY7aunVNUqd2f",
        "playlistImg": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da847b30b6c78fe3215870460621"
    },
    {
        "name": "Country Mix",
        "playlistId": "37i9dQZF1EQmPV0vrce2QZ",
        "playlistImg": "https://seed-mix-image.spotifycdn.com/v6/img/country/40ZNYROS4zLfyyBSs2PGe2/en/default"
    },
    {
        "name": "2000's Pop",
        "playlistId": "6mtYuOxzl58vSGnEDtZ9uB",
        "playlistImg": "https://image-cdn-fa.spotifycdn.com/image/ab67706c0000da84a730bed7741fc8b1cc36b3f9"
    },
    {
        "name": "Classical Essentials",
        "playlistId": "37i9dQZF1DWWEJlAGA9gs0",
        "playlistImg": "https://i.scdn.co/image/ab67706f0000000204342edaafe98ad14f6b8b70"
    },
    {
        "name": "Hard Rock/Metal",
        "playlistId": "1GXRoQWlxTNQiMNkOe7RqA",
        "playlistImg": "https://mosaic.scdn.co/640/ab67616d00001e021bfd51b2bc7d3c1a0ed13b4dab67616d00001e029683e5d7361bb80bfb00f46dab67616d00001e02a492203c6bb696640e89665bab67616d00001e02c8e5391a619e9e8ea2162073"
    }
]

export async function getAccountInfo(req, res) {
    const { username } = req.params
    console.log({ username })
    const userArr = await knex("users").select("id").where({ username })
    const userId = userArr[0].id
    //get user Id

    //get all scores
    const scores = await knex("scores").select("*")

    //number of games played DONE
    const userScores = scores.filter(score => score.user_id === userId)
    const games_played = userScores.length
    console.log({ games_played })

    //top score DONE
    const highest_scores = userScores.sort((a, b) => a.score < b.score ? 1 : -1)
    const highest_score_obj = highest_scores[0]
    const highest_score = highest_score_obj.score
    console.log({ highest_score })
    //highest rank => complex

    //playlist most played TODO
    const playlistCount = {}
    userScores.forEach(score => playlistCount.hasOwnProperty(score.playlist_id) ? playlistCount[score.playlist_id] = playlistCount[score.playlist_id] + 1 : playlistCount[score.playlist_id] = 0)
    
    let highestValue = 0;
    let highestKey = null;

    for (const [key, value] of Object.entries(playlistCount)) {
        if (value > highestValue) {
            highestValue = value;
            highestKey = key;
        }
    }

    const mostPlayedPlaylistName = playlists.find(playlist => playlist.playlistId === highestKey)

    //number of playlists played DONE
    const playlists_played = Object.keys(playlistCount).length

    //playlist with highest score DONE
    const best_playlist_id = highest_score_obj.playlist_id
    console.log({ best_playlist_id })
    const best_playlist_obj = playlists.find(playlist => playlist.playlistId === best_playlist_id)
    const best_playlist = best_playlist_obj.name

    const information = {
        games_played,
        highest_score,
        highest_rank: 0,
        best_playlist,
        most_played: mostPlayedPlaylistName.name,
        playlists_played
    }
    res.status(200).json(information)
}