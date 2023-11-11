const express = require('express');
const app = express();
const path = require('path');

const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const Session = require('./models/sessionModel');
const User = require('./models/userModel');
const Bug = require('./models/bugModel');

const userController = require('./controllers/userController');
const sessionController = require('./controllers/sessionController');
const cookiesController = require('./controllers/cookiesController');

const port = process.env.PORT || 3000;

mongoose
  .connect('mongodb://localhost:27017/itemsApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Mongo connection open');
  })
  .catch((err) => {
    console.log('Error occurred');
    console.log(err);
  });

/*
Automatically parse urlencoded body content and form data from incoming requests and place it in req.body
*/
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
const corsOptions = {
  origin: '*',
};
app.use(cors(corsOptions));

/*
handle requests for static files
*/
app.use('/client', express.static(path.resolve(__dirname, '../client')));

//main page: server client index
app.get('/', (req, res) => {
  console.log('server: serving index');
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

//signup route - what we did in the past is reroute to signup html
//BUT this time we are just checking their input fields on request, and creating user.
app.post('/signup', userController.signUp, (req, res) => {
  console.log('server: signup route succesful.');
  //few middlewares here:
  //Middelware 1: takes req.body info (form signup info) and checks if username taken. sets res.locals.signupCheck to success or fail
  //^ like 'createUser controller?
  //middleware 2: if res.locals.signupCheck is failed (username exists), return "signup failed" to user. if succesful, create account and next()
  //middleware 3: login the user. run whatever middelware we run with login but with the new user this time... maybe reroute.
  //^ like set ssid cookie? start session?
  //finally, redirect to main page (now that user has new account, cookie and session).
  res.redirect(200, '/');
});

//login
app.post(
  '/login',
  userController.verifyUser,
  cookiesController.bakeSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    console.log('server: login route');
    // what should happen here on successful log in?
    res.locals.login
      ? res.redirect(200, '/home')
      : res.redirect(200, '/');
  }
);

//see all bugs + create bug form
app.get('/home', (req, res) => {
  //send on response all the bugs this user logged (read their cookie to get id to query db)
  //read cookie middleware and return user ID to next middleware (res.locals.userID)
  //retrieve bugs middleware (query db based on user Id, get all bugs and return object to response body)
  //res.body = res.locals.allBugs;
  console.log('server: home page reached (display bugs and create bug form');
});

// //authorized routes
// app.get('/secret', sessionController.isLoggedIn, (req, res) => {
//   //if logged in send secret.html
//   res.locals.login
//     ? res.sendFile(path.resolve(__dirname, '../client/secret.html'))
//     : res.redirect(200, '/signup');
// });

// app.get('/secret/users', userController.getAllUsers, (req, res) => {
//   res.send({ users: res.locals.users });
// });

/*
create a new bug entry
*/
app.post('/newentry', async (req, res) => {
  try {
    const newEntry = new Bug(req.body);
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Unable to save the entry' });
  }
});

/*
get all bug entry for a user

?? use app.get and have the user cookie in 
*/
app.post('/getentries', async (req, res) => {
  try {
    const { user } = req.body;
    const entries = await Bug.find({ userId: user });
    res.status(200).json(entries);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Unable to get the entries' });
  }
});

/*
update a bug entry
*/
app.patch('/updateentry/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Bug.findByIdAndUpdate({ _id: id });
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Unable to update the entry' });
  }
});

/*
delete a bug entry
*/
app.delete('/deleteentry/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Bug.deleteOne({ _id: id });
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Unable to delete the entry' });
  }
});

//unknown route..
app.use('*', (req, res) => {
  res.status(404).send('route not found');
});

//global error handling
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(3000);

