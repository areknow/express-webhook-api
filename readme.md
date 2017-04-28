# Express Webhook API Interface

A simple Node.js interface to POST cards to a webhook connector. This is usefull for MS Teams or Slack.
![header image](https://github.com/areknow/express-webhook-api/raw/master/screenshot.png)

## Instructions

Install the dependencies, and run the index.js with the following commands.

```
$ npm install
$ npm start
```
This will start a server at `localhost:8351`, or whatever port you choose in index.js.

You can then POST a request to `http://localhost:8351/api` with the following raw JSON body:
```javascript
{
    "connector": "<YOUR CONNECTOR URL>",
    "title": "This is the title of your card",
    "text": "This is the body of your card",
    "color": "ff0000",
    "actionName": "Activate!",
    "actionURL": "http://google.com"
}
```
Notes:
- `actionName` and `actionURL` are not required, omitting them will prevent an action button from being created.
- `"Content-Type":"application/json"` is required.


## Dependencies
- "body-parser" ^1.17.1
- "express" ^4.15.2
- "node-webhooks" ^1.1.32
