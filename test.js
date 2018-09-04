var request = require('request')
var fs = require('fs');
function downloadImageByURL(url, filePath) {
    request.get(url)               
       .on('error', function (err) {                                   
         throw err; 
       })
    
       .pipe(fs.createWriteStream('./future.jpg'));
  }

  downloadImageByURL('https://avatars1.githubusercontent.com/u/146477?v=4', 'avatar.jpg')