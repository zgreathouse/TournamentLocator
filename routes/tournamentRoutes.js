const mongoose = require('mongoose');
const Path = require('path-parser');
const { URL } = require('url');

const requireLogin = require('../middlewares/requireLogin');
const requireHosting = require('../middlewares/requireHosting');

const Tournament = mongoose.model('tournaments');

module.exports = app => {
  // Get an index of all the up and coming tournaments (and current)
  app.get('/api/tournaments', async (req, res) => {
    try {
      const results = await Tournament.find({});
      res.send(results);
    } catch (err) {
      res.status(422).send(err)
    }
  });

  //Get an index of all the tournaments created by a user
  app.get('/api/:userId/tournaments', requireLogin, (req, res) => {
     res.send(req.user.tournaments);
   });

  //Get page for a specific tournament
  app.get('/api/tournaments/:tournamentId', async (req, res) => {
    const p = new Path('/api/tournaments/:tournamentId')
    const match = p.test(req.url);

    const tournament = await Tournament.find({ _id: match.tournamentId })
    res.send(tournament);
  })

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

     try {
       req.user.tournaments.push(tournament);
       await tournament.save();
       const user = await req.user.save();
       res.send(user);
     } catch (err) {
       res.status(422).send(err)
     }
  });

  // Update (edit) an existing tournament
  app.patch('/api/tournaments/:tournamentId', requireLogin, async (req, res) => {
    const p = new Path('/api/tournaments/:tournamentId')
    const match = p.test(req.url);

    const tournament = await Tournament.findOne({ _id: match.tournamentId })

    if(!req.user.tournaments.includes(tournament)) {
      return res.status(401).send({ error: "You can't change this tournament."});
    }

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
      },
      (err, raw) => {
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

//testing logs for hosting validation
    // console.log('tournament is');
    // console.log(tournament);
    // console.log('user tournaments is');
    // console.log(req.user.tournaments);

//hosting validation
    // if(!req.user.tournaments.includes(tournament)) {
    //   return res.status(401).send({ error: "You can't change this tournament."});
    // }

    try {
      //creates new array of tournaments a user is hosting without tournament to be deleted
      let updatedHostingList = req.user.tournaments.filter(ele => {
        console.log(ele);
        console.log(typeof ele._id);//object
        console.log(typeof tournament.id);//string
        console.log(ele._id == tournament.id);
        return ele._id != tournament.id
      })

      // console.log(updatedHostingList);
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
