// const mongoose = require('mongoose');

// const jwt = require('jsonwebtoken');

// require('dotenv').config();
// const joi = require('joi');
// const passwordcomplexity = require('joi-password-complexity');

// const userSchemaToken = new mongoose.Schema({

//   nom_entreprise: {
//     type: String,
//     required: false
//   },
 
//   nom: {
//     type: String,
//     required: true
//   },
//   prenom: {
//     type: String,
//     required: true
//   },
//   telephone: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   confirmpassword: {
//     type: String,
//     required: false
//   },

//   adresse: {
//     type: String,
//     required: false
//   },
//   compl_adresse: {type: String , required: false } ,
  
 
//   pays: {
//     type: String,
//     required: true
//   },
// });

// userSchemaToken.methods.generateAuthToken = function() { 
//   const token = jwt.sign({ _id: this._id}, process.env.PRIVATE_KEY,{expiresIn: '7d'});
//   return token;
// }

// const Client = mongoose.model('Client', userSchemaToken);

// const validate =(data) => {
//   const schema =joi.object({
//     nom_entreprise: joi.string().required().label("Nom de l'entreprise"),
//     nom: joi.string().required().label("Nom"),
//     prenom: joi.string().required().label("Prenom"),
//     telephone: joi.string().required().label("Telephone"),
//     email: joi.string().email().required().label("Email"),
//     password: passwordcomplexity().required().label("Password"),
//     confirmpassword: joi.ref('password'),
//     adresse: joi.string().required().label("Adresse"),
//   compl_adresse: joi.string().required().label("compl_adresse"),
//     pays: joi.string().required().label("Pays"),
//   });
//   return schema.validate(data);
// }

// module.exports = {Client, validate};
