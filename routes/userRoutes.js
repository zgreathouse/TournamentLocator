const mongoose = require('mongoose');
const Path = require('path-parser');
const { URL } = require('url');

const requireLogin = require('../middlewares/requireLogin');

const User = mongoose.model('users');

module.exports = app => {
  app.patch('/api/users/:userId', requireLogin, async (req, res) =>{

  })

  app.delete('/api/users/:userId', requireLogin, async (req, res) =>{

  })
};
