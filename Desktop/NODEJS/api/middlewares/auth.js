const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports= (req, res, next)=>{
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Accès refusé');
  
    jwt.verify(token, process.env.PRIVATE_KEY, (err, user) => {
      if (err) return res.status(403).send('Token invalide');
      req.user = user;
      next();
    });
  }