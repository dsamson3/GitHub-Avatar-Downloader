var request = require('request');
var secrets = require(/'secrets');
console.log('Welcome to GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
    var options = {
        url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    header {
        "User-Agent" : "Request"
        "Authorization" : GITHUB_TOKEN;
        }
    };
    request(url, function(err, res, body){
        cb(err, body);
        });
  }


getRepoContributors("jquery", "jquery", function (err, results) {
    console.log("Error: ", err);
    console.log("Results: ", results);
  });

