
const express = require('express');
const { register } = require('../Controller/userpsql');
const router = require('express').Router();



router.post('/', register);

module.exports = router;