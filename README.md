# Typora FTP Image Uploader
Small Node.js script for uploading image from Typora via ftp onto a web server.

## Why?
By default typora saves pasted images locally. You can configure it to use relative paths or absolute paths. Both options have their downsides then it comes to changes in. 
The relative path breaks as soon as you move a markdown file into another folder. An absolute path breaks if you move your wiki folder or you want to publish the markdown file somethere. 

To avoid this dependencies to the file system, you can set urls for the images.
Typora provides some image uploaders out of the box, but it makes you dependend to this image uploader and the data privacy of a free service is also an issue.

This script provides a possibility to avoid all the mentioned problems. 
You can store the images on any web server to which you have ftp access.

# Configuration

## Typora-Configuration

* Go to Preferences -> Images -> Image Upload Settings
* Select "Custom Command"

It's a little bit tricky to run the node-script because Typora currently does not access the PATH Environment variables.
Therefore you can run `which node` to get the path to `node` e.g. `/usr/local/bin/node`

The complete command should be: `/usr/local/bin/node <path-to-upload.js>/upload.js`

## FTP Configuration

You have to add a config.js with the following attributes to make the script work

```javascript
exports.ftpConfig = {
    host: "<ftp-host>",
    user: "<ftp-user>",
    password: "<ftp-password>",
    secure: true
}

exports.hostUrl = "<web-url-to-ftp-folder>";

```
