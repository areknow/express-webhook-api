# Express Webhook API Interface

A simple Node.js interface to POST cards to a webhook connector. This is usefull for MS Teams or Slack.

## Instructions

Install the dependencies, and run the index.js with the following commands.

```
$ npm install
$ npm start
```
This will start a server at `localhost:8351`, or whatever port you choose in index.js.

You can then POST a request to `http://localhost:8351/api` with the following raw JSON body:
```
{
	"connector":<YOUR CONNECTOR URL>,
	"title": "This is the title of your card",
	"text": "This is the body of your card",
	"color": "ff0000"
}
```
`"Content-Type":"application/json"` is required.