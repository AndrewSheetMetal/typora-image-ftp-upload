var Client = require('ftp');

var config = require("./config.js");

filesToUpload = process.argv.slice(2);

var c = new Client();
c.on('ready', uploadFirstFileInArrayWhileExists);

function uploadFirstFileInArrayWhileExists() {
  if(filesToUpload.length > 0) {
    var fileToUploadPath = filesToUpload[0];

    var pathParts = fileToUploadPath.split("/");
    var remoteFileName = pathParts[pathParts.length -1];

    c.put(fileToUploadPath, remoteFileName, function(err) {
      if (err) throw err;
      
      console.log(config.hostUrl+remoteFileName);
      
      filesToUpload = filesToUpload.slice(1);

      uploadFirstFileInArrayWhileExists();
      
    });
  }
  else {
    c.end();
  }
}

c.connect(config.ftpConfig);