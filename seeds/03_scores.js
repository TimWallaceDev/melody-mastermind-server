/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('scores').del()
  await knex('scores').insert([
    {user_id: 3, playlist_id: '5ABHKGoOzxkaa28ttQV9sE', score: 5},
    {user_id: 3, playlist_id: '5ABHKGoOzxkaa28ttQV9sE', score: 4},
    {user_id: 3, playlist_id: '5ABHKGoOzxkaa28ttQV9sE', score: 6},
    {user_id: 3, playlist_id: '5ABHKGoOzxkaa28ttQV9sE', score: 6},
    {user_id: 3, playlist_id: '5ABHKGoOzxkaa28ttQV9sE', score: 2},
    {user_id: 3, playlist_id: '5ABHKGoOzxkaa28ttQV9sE', score: 4},
    {user_id: 3, playlist_id: '5ABHKGoOzxkaa28ttQV9sE', score: 5},
    {user_id: 3, playlist_id: '5ABHKGoOzxkaa28ttQV9sE', score: 8},
    {user_id: 3, playlist_id: '5ABHKGoOzxkaa28ttQV9sE', score: 9},
    {user_id: 3, playlist_id: '5ABHKGoOzxkaa28ttQV9sE', score: 13},
  ]);
};
