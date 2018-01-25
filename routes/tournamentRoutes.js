const mongoose = require('mongoose');

const requireLogin = ('../middlewares/requireLogin');

const Tournament = mongoose.model('tournaments');

module.exports = app => {
  // Get an index of all the up and coming tournaments (and current)
  app.get('/api/tournaments', requireLogin, (req, res) => {
    res.send(req.user.tournaments);
  });


  // Get an index of all the tournaments created by a user
  app.get('/api/:userId/tournaments/', requireLogin, async (req, res) => {
    const tournaments = await Tournament.find({ _user: req.user.id })

    res.send(tournaments);
  });


  // Create a new tournament in the database
  app.post('/api/tournaments', requireLogin, async (req, res) => {
    const tournament = new Tournament({
      _user: req.user.id,
      title: req.body.title,
      game: req.body.game,
      tags: req.body.tags,
      description: req.body.description,
      streamLink: req.body.streamLink,
      twitterLink: req.body.twitterLink,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      venueAddress: req.body.venueAddress,
      venueFee: req.body.venueFee,
      entryFee: req.body.entryFee,
      sponsors: req.body.sponsors,
      potBonus: req.body.potBonus,
      maxEntrants: req.body.maxEntrants,
      bannerImage: req.body.bannerImage,
      series: req.body.series,
      forum: []
    })

    
  });

/*
  // Update (edit) an existing tournament
  app.patch('/api/tournaments', );


  // Delete an existing tournament
  app.delete('/api/tournaments', );

*/
}

/*
const { title,
        game,
        tags,
        description,
        streamLink,
        twitterLink,
        startTime,
        endTime,
        venueAddress,
        venueFee,
        entryFee,
        sponsors,
        potBonus,
        maxEntrants,
        bannerImage,
        series } = req.body;
*/
