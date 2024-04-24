/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
    // Deletes ALL existing entries
    await knex('playlists').del()
    await knex('playlists').insert([
    
        {
            name: "Top 100",
            id: "5ABHKGoOzxkaa28ttQV9sE",
            image_url: "https://i2o.scdn.co/image/ab67706c0000cfa382a04c37e7ae0d899edb198e"
        },
        {
            name: "60's mix",
            id: "37i9dQZF1DXaKIA8E7WcJj",
            image_url: "https://i.scdn.co/image/ab67706f000000027d2220cb073e82fe520555fc"
        },
        {
            name: "70's mix",
            id: "37i9dQZF1EQpVaHRDcozEz",
            image_url: "https://seed-mix-image.spotifycdn.com/v6/img/seventies/3IYUhFvPQItj6xySrBmZkd/en/large"
        },
        {
            name: "All Out 80's",
            id: "37i9dQZF1DX4UtSsGT1Sbe",
            image_url: "https://i.scdn.co/image/ab67706f00000003fe154a455809e72e4d854880"
        },
        {
            name: "90's Hits",
            id: "3C64V048fGyQfCjmu9TIGA",
            image_url: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebbc47d6a6244a43c585ad705d2"
        },
        {
            name: "Blues Classics",
            id: "37i9dQZF1DXd9rSDyQguIk",
            image_url: "https://i.scdn.co/image/ab67706f000000027500902fb0aa21f0bdb12cfd"
        },
        {
            name: "Classic Rock",
            id: "3DYUw0nHB9o8tLZKQup4zp",
            image_url: "https://mosaic.scdn.co/640/ab67616d00001e023fa684e0f8fad563122ff6dcab67616d00001e029e994564d5e7fff06c7c7fd5ab67616d00001e02a7af122cd50575f63a156586ab67616d00001e02d7d4922d7d2b7e596084075e"
        },
        {
            name: "90's Hip Hop",
            id: "37i9dQZF1DX186v583rmzp",
            image_url: "https://i.scdn.co/image/ab67706f00000002b5e5274fbae4bcf84bf57f69"
        },
        {
            name: "2000's Pop",
            id: "6mtYuOxzl58vSGnEDtZ9uB",
            image_url: "https://image-cdn-fa.spotifycdn.com/image/ab67706c0000da84a730bed7741fc8b1cc36b3f9"
        },
        {
            name: "2010's Hits",
            id: "5XALIurWS8TuF6kk8bj438",
            image_url: "https://mosaic.scdn.co/640/ab67616d00001e026d4056466fc11f6408be2566ab67616d00001e02b2b2747c89d2157b0b29fb6aab67616d00001e02d77a9a738c99b8c4f7a7c3eeab67616d00001e02e80e7dbce3996a1ae5967751"
        },
        {
            name: "Rap Bangers Only",
            id: "2xT3ZPE51ewIFa3dLLpkSa",
            image_url: "https://mosaic.scdn.co/640/ab67616d00001e026aca031ccc27d2e4dd829d14ab67616d00001e02cdb645498cd3d8a2db4d05e1ab67616d00001e02d9194aa18fa4c9362b47464fab67616d00001e02f54b99bf27cda88f4a7403ce"
        },
        {
            name: "Hard Rock",
            id: "0rrFbHWdEKGHGEkZIRCItn",
            image_url: "https://mosaic.scdn.co/640/ab67616d00001e022b222dcd5c4fcac7c0e81da2ab67616d00001e026b3463e7160d333ada4b175aab67616d00001e02985bf5ede2fe4a048ee85f28ab67616d00001e02c65f8d04502eeddbdd61fa71"
        },
        {
            name: "Musicals",
            id: "0ER0xAgCLXY7aunVNUqd2f",
            image_url: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da847b30b6c78fe3215870460621"
        },
        {
            name: "Country Mix",
            id: "37i9dQZF1EQmPV0vrce2QZ",
            image_url: "https://seed-mix-image.spotifycdn.com/v6/img/country/40ZNYROS4zLfyyBSs2PGe2/en/default"
        },
        {
            name: "Classical Essentials",
            id: "37i9dQZF1DWWEJlAGA9gs0",
            image_url: "https://i.scdn.co/image/ab67706f0000000204342edaafe98ad14f6b8b70"
        }
    ]);
  };
  