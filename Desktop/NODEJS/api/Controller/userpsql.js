const express = require('express');
const pool =require('../db/Dbp');
const pg = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
 
 module.exports.register = ('/register', async (req, res) => {
    const { nom, prenom, pays, adresse, comple_adresse, telephone, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
  
    try {
      const result = await pool.query(
        'INSERT INTO users (nom_entreprise,nom, prenom, pays, adresse, comple_adresse,  telephone, email, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
        [nom_entreprise,nom, prenom, pays, adresse, comple_adresse,  telephone, email, hashedPassword]
      );
  
      const user = result.rows[0];
      res.json({ id: user.id, email: user.email });
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors de l\'inscription');
    }
  });
  
  module.exports.login =('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      const user = result.rows[0];
  
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ userId: user.id, email: user.email }, process.env.PRIVATE_KEY, { expiresIn: '1d' });
        res.json({ token });
      } else {
        res.status(401).send('Identifiants invalides');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors de la connexion');
    }
  });
  