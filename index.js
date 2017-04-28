// init express server and use static html views 
var express     = require('express');
var app         = express();
var port        = 8351;
app.listen(port);
app.use(express.static('views'));
console.log('server is listening on '+port)

// set up webhooks
var WebHooks = require('node-webhooks')
var webHooks = new WebHooks({
  db: './webHooksDB.json', 
})

// load default route with landing page
app.get('/', function(req, res){
  res.render('index.html');
});

// use body parser for json and encoding
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

// post route to handle the API call and build the webhook 
app.post('/api', function(req, res){
  var color = "16161d"
  var connector = req.body.connector;
  var title = req.body.title;
  var text = req.body.text;
  var actionName = req.body.actionName;
  var actionURL = req.body.actionURL;
  color = req.body.color;
  webHooks.trigger('webhook', {
    "title": title, 
    "text": text, 
    "themeColor": color,
        "potentialAction": [{
        "@context": "https://schema.org", 
        "@type": "ViewAction", 
        "name": "Open Action", 
        "target": ["http://localhost:"+port]
    }]
  });
  webHooks.add('webhook', connector).then(function(){
    res.send('webhook success');
  }).catch(function(err){
    res.send(err);
  });
});