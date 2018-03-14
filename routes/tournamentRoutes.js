const mongoose = require('mongoose');
const Path = require('path-parser');
const { URL } = require('url');

const requireLogin = require('../middlewares/requireLogin');

const Tournament = mongoose.model('tournaments');


module.exports = app => {
  // Get an index of all the up and coming tournaments
  app.get('/api/tournaments', async (req, res) => {
    try {
      const allTournaments = await Tournament.find({});
      res.send(allTournaments);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  //Get an index of all the tournaments created by a user
  app.get('/api/:userId/tournaments', requireLogin, async (req, res) => {
    const tournaments = await Tournament.find({ _user: req.user.id });

    res.send(tournaments);
  });

  //Get page for a specific tournament
  app.get('/api/tournaments/:tournamentId', async (req, res) => {
    //creates POJO as { nameOfWildcard: valueOfWildcard } from url
    const p = new Path('/api/tournaments/:tournamentId');
    const match = p.test(req.url);

    const tournament = await Tournament.findOne({ _id: match.tournamentId });

    res.send(tournament);
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
     });
     //saves tournament and adds to user hosting array. Sends back updated user
     try {
       req.user.tournaments.push(tournament._id);
       await tournament.save();
       const user = await req.user.save();
       res.send(tournament);
     } catch (err) {
       res.status(422).send(err);
     }
  });

  // Update (edit) an existing tournament
  app.patch('/api/tournaments/:tournamentId', requireLogin, async (req, res) => {
    //gets id from wildcard in url
    const p = new Path('/api/tournaments/:tournamentId')
    const match = p.test(req.url);

    const tournament = await Tournament.findOne({ _id: match.tournamentId })

    //Hosting validation
    if(!req.user.tournaments.includes(tournament._id.toString())) {
      return res.status(401).send({ error: "You can't edit this tournament."});
    }

    // finds tournament by id and updates in db
    Tournament.update({
      _id: tournament.id },
      { $set: {
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
          series: req.body.series
        }
      },//callback for error handling and immediate execution
      (err) => {
        if(err) {
          res.status(422).send(err);
        }
      }
    )

    res.send(req.user);
  });

  // Delete an existing tournament
  app.delete('/api/tournaments/:tournamentId', requireLogin, async (req, res) => {
    const p = new Path('/api/tournaments/:tournamentId')
    const match = p.test(req.url);

    const tournament = await Tournament.findOne({ _id: match.tournamentId })

    //Hosting validation
    if(!req.user.tournaments.includes(tournament._id.toString())) {
      return res.status(401).send({ error: "You can't edit this tournament."});
    }

    //creates new array of tournament ids a user is hosting without tournament to be deleted
    try {
      let updatedHostingList = req.user.tournaments.filter(ele => {
        return ele !== tournament.id.toString();
      });

      //removes tournament
      Tournament.findByIdAndRemove(tournament.id).exec();

      //updates user document with new hosting list
      req.user.tournaments = updatedHostingList;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
