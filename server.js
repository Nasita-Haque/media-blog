let express = require('express');
let app = express();
let bodyparser = require('body-parser');
let path = require('path');
let db = require('./models');
let port = process.env.PORT || 4200;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static('public'));

app.use('/api', require('./routers'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'));
})

db.sequelize.sync().then( () => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  });
})
