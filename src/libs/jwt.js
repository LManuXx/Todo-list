const {TOKEN_SECRET} = require('../models/config');
const jwt = require('jsonwebtoken');

const createAccessToken =  async (payload)=> {
    return new Promise((resolve, reject) => {
      jwt.sign(payload, TOKEN_SECRET, { expiresIn: "1d" }, (err, token) => {
        if (err) reject(err);
        resolve(token);
      });
    });
  }

  module.exports = {
    createAccessToken
  }
