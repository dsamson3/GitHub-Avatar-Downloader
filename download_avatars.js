var request = require('request');
var fs = require('fs');
var getToken = require('./secrets');
var repoOwner = process.argv[2];
var repoName = process.argv[3];
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
    .pipe(fs.createWriteStream("avatars/" + filePath + ".png"));

    } 
getRepoContributors(repoOwner, repoName, function (err, results, downloadImageCb) {
    if(repoOwner === undefined || repoName === undefined){
        console.log("Need more arguments")
        return 0;
    } if(process.argv > 4){
        console.log("Too Many arguments")
        return 0;
    } if(err !== null){
        console.log("Errors; ", err);
        return 0;
    }
    arrayOfContributorsObj = JSON.parse(results);
    if(arrayOfContributorsObj === "Bad credentials"){
        console.log("Bad credentials");
        return 0;
    }
    if (!fs.existsSync('avatars/')){
        fs.mkdirSync('avatars/');
      }
    var filePath = "avatars/"
    arrayOfContributorsObj.forEach(function(contributor){
    downloadImageCb(contributor.avatar_url,contributor.login);
    }
);
}
);
