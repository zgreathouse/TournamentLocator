//custom middleware for determining if the user is the host of a tournament
module.exports = (req, res, next) => {
  if (!req.user.tournaments.includes(req.tournament.id) {
    return res.status(401).send({ error: "You can't delete this tournament."});
  }

  next();
};
