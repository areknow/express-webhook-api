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
    res.send('webhook success')
  }).catch(function(err){
    res.send(err)
  });
});









// Initialize WebHooks module. 


// json file that store webhook URLs 


//define the webhook url
// var url = 'https://outlook.office.com/webhook/9a13f911-e1f1-4f6a-868b-def0c81f3a4e@70ebe3a3-5b30-435d-9d67-7716d74ca190/IncomingWebhook/e5cefb5c639943aab4c7ba8046459c4e/d609a152-1ff6-41f5-a3c7-e5a1db19636e';
 
// sync instantation - add a new webhooks


//set up the webhook triggers


//set up the webhook advanced
// webHooks.trigger('webhook', {
//     "title": "Learn about Office 365 Connectors", 
//     "text": "Visit the [Outlook Dev Portal](https://dev.outlook.com) to learn more about Office 365 Connectors!", 
//     "themeColor": "EA4300", 
    // "potentialAction": [{
    //     "@context": "https://schema.org", 
    //     "@type": "ViewAction", 
    //     "name": "Open Outlook Dev Center", 
    //     "target": ["https://dev.outlook.com"]
    // }]
// });