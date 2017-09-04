# xlsx-json
A script that will parse an Excel file with multiple sheets representing different entity types and create JSON file(s) for each entity. 
Each column being a unique attribute for an object defined by each row. Currently only handles two columns, but unlimited rows. 

## Requirements

* Node.js (version 0.10.46)
* Microsoft Excel
* 5 minutes of your time

## Guide

1. Using the command line, navigate to your directory of choice and clone the repository: 
```git clone https://github.com/Sir-Turtle/xlsx-json.git xlsx-json```
2. Change directory:
```cd xlsx-json```
3. Install Node Version Manager:
```https://github.com/creationix/nvm/blob/master/README.md#install-script```
4. For the script to execute you'll need a Node version of v0.10.46, so lets install that:
```nvm install v0.10.46```
5. You can list and view all node versions installed by:
```nvm list```
6. You can switch between them with this command by stating the version number such as:
```nvm use v0.10.46```
7. Verify Node version is v0.10.46:
```node -v```
7. Install node dependencies:
```npm install```
8. To execute the script, you will need executable permission for the file. If you do not have the needed permission you may run: 
```chmod +x /path/to/your/xlsx-json.js``` 
9. Finally, to run the script: 
```node /path/to/your/xlsx-json.js```


