//const express = require('express');
//const mongoose = require('mongoose');

import Express from "express";
import BodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from  'dotenv';

dotenv.config({
  path: './env'
})
const app = Express();
const Port = process.env.PORT || 3000;

//mongoose.connect('', {
 // useNewUrlParser: true,
 // useUnifiedTopology: true
//});
//const db = mongoose.connection;
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const dataSchema = new mongoose.Schema({
  id: String,
  second: String,

});


const DataModel = mongoose.model('Data', dataSchema);

app.get('/api/data', async (req, res) => {
  const { id, second } = req.query;

  
  const query = {
    id: id,
    second: second
  };

  try {
    
    const result = await DataModel.find(query);

    res.json(result); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
