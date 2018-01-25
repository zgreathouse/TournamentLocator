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

/*
  // Create a new tournament in the database
  app.post('/api/tournaments', );


  // Update (edit) an existing tournament
  app.patch('/api/tournaments', );


  // Delete an existing tournament
  app.delete('/api/tournaments', );

*/
}
