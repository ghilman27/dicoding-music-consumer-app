const { Pool } = require('pg');

class Postgres {
  constructor() {
    this._pool = new Pool();
  }

  async query(text, params) {
    const start = Date.now();
    const res = await this._pool.query(text, params);
    const duration = Date.now() - start;
    console.log('executed query', {
      text,
      duration,
      rows: res.rowCount,
    });
    return res;
  }

  async getSongs(playlistId) {
    const query = {
      text: `SELECT songs.id, songs.title, songs.performer FROM songs
      LEFT JOIN playlistsongs ON songs.id = playlistsongs.song_id
      WHERE playlistsongs.playlist_id = $1`,
      values: [playlistId],
    };
    const result = await this.query(query);
    return result.rows;
  }
}

module.exports = Postgres;
