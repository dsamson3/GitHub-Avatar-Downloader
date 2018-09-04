var request = require('request');
var getToken = require('./secrets');
console.log('Welcome to GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
    var options = {
        url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
        'User-Agent' : 'request',
        'Authorization' : getToken.GITHUB_TOKEN + ' OAUTH-TOKEN',
        }
    };
    request(options, function(err, res, body){
        cb(err, body);
        });
  }
function getAvatarURL (err, body){
    if(err) {throw err;}
    else {
        cosole.log(JSON.parse(body));
    } 
} 

getRepoContributors("jquery", "jquery", function (err, results) {
    console.log("Error: ", err);
    arrayOfContributorsObj = JSON.parse(results)
    for(var i = 0; i < arrayOfContributorsObj.length; i++)
    {
        console.log(arrayOfContributorsObj[i].avatar_url);
    }
    
   });

