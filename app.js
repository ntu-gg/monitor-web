var config = require('./config');
var express = require('express');
var Sequelize = require('sequelize');
var app = express();
var sequelize = new Sequelize(config.database_url);

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/api/jobs', function(req, res) {
  sequelize.query("SELECT `id`, `url` FROM `job`", { type: sequelize.QueryTypes.SELECT })
    .then(function(jobs) {
      return res.json(jobs);
    }).catch(function(err) {
      console.error(err);
      return res.status(500).json({
        err: err
      });
    });
});

app.post('/api/report', function(req, res) {

});

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening!');
});
