module.exports = (req, res, next) => {
  if(!req.user.finishAccountSetup){
    return res.status(401).send({ error: "You must finish your account setup to use this feature"});
  }

  next();
}
