// const mongoose = require('mongoose');
// const User = require('./models/userModel');
// const Bug = require('./models/bugModel');

// mongoose.connect('mongodb://localhost:27017/itemsApp', { useNewUrlParser: true })
//   .then(() => {
//     console.log("Mongo connection open")
//   })
//   .catch(err => {
//     console.log("Error occured")
//     console.log(err)
//   });


//   const seedUsers = [
//       {
//         "username": "test1",
//         "password": "test1",
//       },
//       {
//         "username": "test2",
//         "password": "test2",
//       },
//   ];


//   const seedBugs = [
//     {
//       title: 'Crash on Login',
//       problem: 'Application crashes when attempting to log in',
//       technology: ['Node.js', 'React'],
//       expected: 'User should be able to log in without any issues',
//       attempts: 'Tried logging in with valid credentials',
//       assumptions: 'Assumed server is properly configured',
//       status: false,
//       solution: '',
//       errorCode: 'ERR001',
//       userId: "65524a4f291e42af0619a6d7",
//     },


//     {
//       title: 'Database Connection Error',
//       problem: 'Unable to establish connection with the database',
//       technology: ['MongoDB'],
//       expected: 'Database connection should be established',
//       attempts: 'Checked database connection string',
//       assumptions: 'Assumed database server is running',
//       status: false,
//       solution: '',
//       errorCode: 'ERR002',
//       userId: "65524a4f291e42af0619a6d7", 
//     },
//   ];
  

//   User.insertMany(seedUsers)
//   .then (res => {
//     console.log(res)
//   })
//   .catch(e => {
//     console.log(e)
//   })

//   Bug.insertMany(seedBugs)
//   .then (res => {
//     console.log(res)
//   })
//   .catch(e => {
//     console.log(e)
//   })


