const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()
// const update = require('./src/router')
// const User = require("./src/modelUser")

// kategori
// mongoose.connect(process.env.URL, function(err, db) {
//     if (err) throw err;
//     db.collection('wisatas').aggregate([
//      { $lookup:
//         {
//           from: 'kategoris',
//           localField: 'kategori_id',
//           foreignField: '_id',
//           as: 'kategoridetails'
//         }
//       }
//     ]).toArray(function(err, res) {
//       if (err) throw err;
//       const data = JSON.stringify(res)
//       console.log(data)
//       // db.close();
//       app.use(cors())
//       app.use(bodyParser.json());
//       app.use('/', (req, res) => {
//         res.send(JSON.parse(data))
//       });
//     });


//     app.listen(process.env.PORT, (req, res) => {
//       console.log(`server run port ${process.env.PORT}`)
//     })

//   });


//Rating

mongoose.connect(process.env.URL, function(err, db) {
  if (err) throw err;
  db.collection('wisatas').aggregate([
         { $lookup:
            {
              from: 'kategoris',
              localField: 'kategori_id',
              foreignField: '_id',
              as: 'kategoridetails'
            }
          }
        ]).toArray(function(err, res) {
          if (err) throw err;
          const data = JSON.stringify(res)
          console.log(data)
          // db.close();
          app.use(cors())
          app.use(bodyParser.json());
          app.use('/kategori', (req, res) => {
            res.send(JSON.parse(data))
          });
        });
  db.collection('ratings').aggregate([
   { $lookup:
      {
        from: 'wisatas',
        localField: 'aid',
        foreignField: '_id',
        as: 'wisatasdetail'
      }
    },
    {
      $lookup:
      {
        from: 'loginusers',
        localField: 'uid',
        foreignField: '_id',
        as: 'usersdetail'
      }
    }
  ]).toArray(function(err, res) {
    if (err) throw err;
    const data = JSON.stringify(res)
    console.log(data)
    // db.close();
    app.use(cors())
    app.use(bodyParser.json());
    app.use('/', (req, res) => {
      res.send(JSON.parse(data))
    });
  });


  app.listen(process.env.PORT, (req, res) => {
    console.log(`server run port ${process.env.PORT}`)
  })

});