const express = require('express');
const mongoose = require('mongoose');
const User = require("./src/modelUser")

User.findOne({ pembeli: 'bambang'}).populate('makanans').exec((err, user)=> {
    if (err) return handleError(err);
    console.log(user);
})


