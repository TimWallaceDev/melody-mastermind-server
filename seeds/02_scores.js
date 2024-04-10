/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('scores').del()
  await knex('scores').insert([
    {user_id: 1, playlist_id: '1qSQwiZA13xixRU8Rzacuz', score: 4},
    {user_id: 2, playlist_id: '1qSQwiZA13xixRU8Rzacuz', score: 5},
    {user_id: 3, playlist_id: '37i9dQZF1DX4UtSsGT1Sbe', score: 6},
    {user_id: 4, playlist_id: '37i9dQZF1DX4UtSsGT1Sbe', score: 6},
    {user_id: 4, playlist_id: '37i9dQZF1DX4UtSsGT1Sbe', score: 2},
    {user_id: 5, playlist_id: '37i9dQZF1DX4UtSsGT1Sbe', score: 4},
    {user_id: 5, playlist_id: '3C64V048fGyQfCjmu9TIGA', score: 5},
    {user_id: 6, playlist_id: '3C64V048fGyQfCjmu9TIGA', score: 8},
    {user_id: 6, playlist_id: '3C64V048fGyQfCjmu9TIGA', score: 9},
    {user_id: 7, playlist_id: '3C64V048fGyQfCjmu9TIGA', score: 13},
  ]);
};
