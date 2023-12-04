
const express = require('express');
const { login } = require('../Controller/userpsql');
const router = require('express').Router();

router.post('/', login);

module.exports = router;