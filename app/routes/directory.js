var express = require('express');
// router variable takes the place of app variable
var router = express.Router();


// Second Route (directory route)

router.get('/directory', function(req, res) {
  var info = '';
  var dataFile = req.app.get('appData');
  dataFile.directory.forEach(function(item) {
      info += `
      <li>
        <h2>${item.first_name}</h2>
        <p>${item.para}</p>
        <img src="${item.img}"></img>

      </li>

      `;

  })
  res.send(`
    <h1> Web Studio Place</h1>
    ${info}
    `);
});


router.get('/directory/:last_name', function(req, res) {
  // 
  var dataFile = req.app.get('appData');
  var direct = dataFile.directory[req.params.last_name];
  res.send(`
    <h1> ${direct.email}</h1>
      <h2> ${direct.first_name}</h2>
        <p>${direct.para}</p>
    `);
});

module.exports = router;
