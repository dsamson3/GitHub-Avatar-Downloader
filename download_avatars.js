var request = require('request');
var fs = require('fs');
var getToken = require('./secrets');

console.log('Welcome to GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
    var options = {
        url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
        'User-Agent' : 'request',
        'Authorization' :'token  '+ getToken.GITHUB_TOKEN,
        }
    };
    request(options, function(err, res, body){
        cb(err, body, downloadImageByURL);
        });
    }
function downloadImageByURL(url, filePath) {
    console.log(filePath);
    request.get(url)             
    .on('error', function (err) {  
        if(err) {
         throw err; 
        }                                
    else{
        console.log('Conecting to server...')
    }
 })
  .on('response', function(response){

  })
    .pipe(fs.createWriteStream("avatar/" + filePath + ".png"));

    } 
getRepoContributors("jquery", "jquery", function (err, results, downloadImageCb) {
    console.log("Error: ", err);
    arrayOfContributorsObj = JSON.parse(results);
    console.log(arrayOfContributorsObj);
    arrayOfContributorsObj.forEach(function(contributor){
    downloadImageCb(contributor.avatar_url, contributor.login);
    }
);
}
);
