// const mongoose = require("mongoose");
// const { Client, validate } = require("../Models/userModelToken");

// const joi = require('joi');
// const passwordcomplexity = require('joi-password-complexity');

// const bcrypt = require("bcrypt");

// module.exports.RegisteurToken = async (req, res) => {
//   try {
//     const { error } = validate(req.body);
//     if (error) {
//       return res.status(400).send({ message: error.details[0].message });
//     }
//     const client = await Client.findOne({ email: req.body.email });
//     if (client) {
//       return res.status(409).send({ message: "l'email " +client.email + " existe deja" ,alert: false });
//     }
//     const salt = await bcrypt.genSalt(Number(process.env.SALT));

//     const haspassword = await bcrypt.hash(req.body.password, salt);

//     await new Client({ ...req.body, password: haspassword }).save();
//     res.status(200).send({ message: "utilisateur creer avec success", alert:true });
//   } 
//   catch (err) {
//     console.log(err);
//     res.status(500).send({
//       message: err.message,
//     });
//   }
// };

// module.exports.LoginToken = async (req, res) => {
//   try{
//       const {error} = validateA(req.body);
//       if(error){
//           return res.status(400).send({message: error.details[0].message});
//       }
//       const client = await Client.findOne({email: req.body.email});
//       if(!client){
//           return res.status(409).send({message: "Email n'existe pas,veuillez vous inscrit svp", alert: false});
//       }

//       const validPassword = await bcrypt.compare(req.body.password, client.password);
//       if(!validPassword){
//           return res.status(409).send({message: "Mot de passe incorrect" , alert: false});
//       }
//       const token = client.generateAuthToken();
//       res.status(200).send({message: "Connexion reussi", data: token , alert: true});

//   }
// catch(err){
//   console.log(err);
//   res.status(500).send({
//     message: err.message,
//   });
// }
// }

// const validateA = (data)=>{
//   const schema = joi.object({
      
//       email: joi.string().required().label("email"),
//       password: passwordcomplexity().required().label("password"),
      
//   });

//   return schema.validate(data);
// }