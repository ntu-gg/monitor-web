var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/api/jobs', function(req, res) {
  var jobs = [];
  var urls = [
    'https://my.ntu.edu.tw/',
    'https://ceiba.ntu.edu.tw/',
    'https://mail.ntu.edu.tw/',
    'https://ifsel3.aca.ntu.edu.tw/', // 成績查詢
    'https://if163.aca.ntu.edu.tw/eportfolio/', // ePo
    'https://if192.aca.ntu.edu.tw/', // 選課系統
    'https://if177.aca.ntu.edu.tw/', // 選課系統 2
    'https://nol.ntu.edu.tw/nol/guest/index.php', // 課程網
    'https://nol2.aca.ntu.edu.tw/nol/guest/index.php', // 課程網 2
    'https://www.space.ntu.edu.tw/navigate/' // NTU Space
  ];
  urls.forEach(function(element, index, array) {
    jobs.push({
      id: index,
      url: element
    });
  });
  res.json(jobs);
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening!');
});
