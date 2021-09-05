class Listener {
  constructor({ dbClient, emailClient }) {
    this._dbClient = dbClient;
    this._emailClient = emailClient;
  }

  listen = async (message) => {
    try {
      const { content } = message;
      const { playlistId, targetEmail } = JSON.parse(content.toString());

      const songs = await this._dbClient.getSongs(playlistId);
      const sentMessageInfo = await this._emailClient.sendEmail({
        from: 'Songs Apps',
        to: targetEmail,
        subject: 'Export Playlist',
        text: 'Here is your playlist, cheers! Contact us for support at sample_email@server.com',
        attachments: [
          {
            filename: 'songs.json',
            content: JSON.stringify(songs),
          },
        ],
      });

      console.log(sentMessageInfo);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Listener;
