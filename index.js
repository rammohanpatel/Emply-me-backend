
const express = require('express');
const mongoose = require('mongoose');
const User = require('./User'); // Import the Mongoose model

const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

const mongoURI = 'mongodb+srv://employ_me:9696861559EMPLOYME@cluster0.ngoecst.mongodb.net/?retryWrites=true&w=majority';
app.use(express.json());
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.use(cors());
    app.get('/', (req, res) => {
        res.send("Welcome to EmployMe");
    });
    
    // Define a route to handle form submissions
    app.post('/register', async (req, res) => {
      try {
        const registrationData = req.body;// Assuming registration data is sent in the request body
          console.log(req.body);
        // Create a new user document using the Mongoose model
        const newUser = new User(registrationData);

        // Save the user document to the database
        await newUser.save();

        console.log('Registration data inserted:', newUser);

        // Respond with a success message or redirect to a thank-you page
         res.status(201).send('Registration successful');
        // res.redirect('/registration-success');
      } catch (error) {
        console.error('Error inserting registration data:', error);
        res.status(500).send('Registration failed');
      }
    });

    // Start the Express server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });