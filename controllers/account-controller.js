import Knex from "knex";
import Knexfile from "../knexfile.js";
const knex = Knex(Knexfile.development);

const playlists = [
    {
        "name": "Top 100",
        "playlistId": "5ABHKGoOzxkaa28ttQV9sE",
        "playlistImg": "https://i2o.scdn.co/image/ab67706c0000cfa382a04c37e7ae0d899edb198e"
    },
    {
        "name": "60's mix",
        "playlistId": "37i9dQZF1DXaKIA8E7WcJj",
        "playlistImg": "https://i.scdn.co/image/ab67706f000000027d2220cb073e82fe520555fc"
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
        "name": "Blues Classics",
        "playlistId": "37i9dQZF1DXd9rSDyQguIk",
        "playlistImg": "https://i.scdn.co/image/ab67706f000000027500902fb0aa21f0bdb12cfd"
    },
    {
        "name": "Classic Rock",
        "playlistId": "3DYUw0nHB9o8tLZKQup4zp",
        "playlistImg": "https://mosaic.scdn.co/640/ab67616d00001e023fa684e0f8fad563122ff6dcab67616d00001e029e994564d5e7fff06c7c7fd5ab67616d00001e02a7af122cd50575f63a156586ab67616d00001e02d7d4922d7d2b7e596084075e"
    },
    {
        "name": "90's Hip Hop",
        "playlistId": "37i9dQZF1DX186v583rmzp",
        "playlistImg": "https://i.scdn.co/image/ab67706f00000002b5e5274fbae4bcf84bf57f69"
    },
    {
        "name": "2000's Pop",
        "playlistId": "6mtYuOxzl58vSGnEDtZ9uB",
        "playlistImg": "https://image-cdn-fa.spotifycdn.com/image/ab67706c0000da84a730bed7741fc8b1cc36b3f9"
    },
    {
        "name": "2010's Hits",
        "playlistId": "5XALIurWS8TuF6kk8bj438",
        "playlistImg": "https://mosaic.scdn.co/640/ab67616d00001e026d4056466fc11f6408be2566ab67616d00001e02b2b2747c89d2157b0b29fb6aab67616d00001e02d77a9a738c99b8c4f7a7c3eeab67616d00001e02e80e7dbce3996a1ae5967751"
    },
    {
        "name": "Rap Bangers Only",
        "playlistId": "2xT3ZPE51ewIFa3dLLpkSa",
        "playlistImg": "https://mosaic.scdn.co/640/ab67616d00001e026aca031ccc27d2e4dd829d14ab67616d00001e02cdb645498cd3d8a2db4d05e1ab67616d00001e02d9194aa18fa4c9362b47464fab67616d00001e02f54b99bf27cda88f4a7403ce"
    },
    {
        "name": "Hard Rock",
        "playlistId": "0rrFbHWdEKGHGEkZIRCItn",
        "playlistImg": "https://mosaic.scdn.co/640/ab67616d00001e022b222dcd5c4fcac7c0e81da2ab67616d00001e026b3463e7160d333ada4b175aab67616d00001e02985bf5ede2fe4a048ee85f28ab67616d00001e02c65f8d04502eeddbdd61fa71"
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
        "name": "Classical Essentials",
        "playlistId": "37i9dQZF1DWWEJlAGA9gs0",
        "playlistImg": "https://i.scdn.co/image/ab67706f0000000204342edaafe98ad14f6b8b70"
    }
]

export async function getAccountInfo(req, res) {
    //get user Id
    const { username } = req.params
    const userArr = await knex("users").select("id").where({ username })
    const userId = userArr[0].id

    //get all scores
    const scores = await knex("scores").select("*")

    //number of games played 
    const userScores = scores.filter(score => score.user_id === userId)
    const games_played = userScores.length

    //check that games have been played, if not, return array with placeholders
    if (userScores.length === 0) {
        res.status(200).json({
            games_played: "No Games Played",
            highest_score: 0,
            best_playlist: "N/A",
            most_played: "N/A",
            playlists_played: 0
        })
        return
    }

    //top score
    const highest_scores = userScores.sort((a, b) => a.score < b.score ? 1 : -1)
    const highest_score_obj = highest_scores[0]
    const highest_score = highest_score_obj.score

    //playlist most played
    const playlistCount = {}
    userScores.forEach(score => playlistCount.hasOwnProperty(score.playlist_id) ? playlistCount[score.playlist_id] = playlistCount[score.playlist_id] + 1 : playlistCount[score.playlist_id] = 1)
    let highestValue = 0;
    let highestKey = null;

    for (const [key, value] of Object.entries(playlistCount)) {
        if (value > highestValue) {
            highestValue = value;
            highestKey = key;
        }
    }

    const mostPlayedPlaylistObj = playlists.find(playlist => playlist.playlistId === highestKey)
    const most_played = mostPlayedPlaylistObj["name"]

    //number of playlists played
    const playlists_played = Object.keys(playlistCount).length

    //playlist with highest score
    const best_playlist_id = highest_score_obj.playlist_id
    const best_playlist_obj = playlists.find(playlist => playlist.playlistId === best_playlist_id)
    const best_playlist = best_playlist_obj["name"]

    const information = {
        games_played,
        highest_score,
        best_playlist,
        most_played,
        playlists_played
    }
    res.status(200).json(information)
}