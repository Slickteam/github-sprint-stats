# github-sprint-stats

Get stats for sprints using GitHub GraphQL API.

With this project you can see some stats on your project to follow some data.


## How to run it

This is a simple HTML / Javascript tool, to run it on your projet you must set in the app.js these 3 variables:
```javascript
const sprintField = 'Sprint';
const estimateField = 'Estimate';
const consumedField = 'Réalisé';
```

These variables correspond to the custom fields of your project on GitHub:
* sprintField: the name of the field you use to set the sprint of the issue
* estimateField: the name of the field you use to set the estimation of the issue
* consumedField: the name of the field you use to set the time used to complete the issue


## Configure the authentication

When you open the `index.html` in your browser, you have in the navbar a button where you can set:
* the token for GitHub
* the owner of the repo
* the name of the repo
