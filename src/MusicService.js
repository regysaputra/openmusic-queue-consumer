const { Pool } = require('pg');
 
class MusicService {
  constructor() {
    this._pool = new Pool();
  }

  async getPlaylists(userId) {
    const query = {
      text: 'SELECT name FROM playlists WHERE id = $1',
      values: [userId],
    };

    const result = await this._pool.query(query);

    return result.rows;
  }
}

module.exports = MusicService;