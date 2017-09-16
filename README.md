# xlsx-json
A script that will parse an Excel file with multiple sheets representing different entity types and create JSON file(s) for each entity. 
Each column being a unique attribute for an object defined by each row. Currently only handles two columns, but unlimited rows. 

## Requirements

* Node.js (version 0.10.46)
* Microsoft Excel
* 5 minutes of your time

## Guide

1. Using the command line, navigate to your directory of choice and clone the repository: 
```
git clone https://github.com/Sir-Turtle/xlsx-json.git xlsx-json
```
2. Change directory into the newly cloned local repository:
```
cd xlsx-json
```
3. Install Node Version Manager by following the instructions here:
https://github.com/creationix/nvm/blob/master/README.md#install-script
4. For the script to execute you'll need Node version 0.10.46, so lets install that:
```
nvm install v0.10.46
```
5. You can list and view all Node versions installed by:
```
nvm list
```
6. You can switch between versions with this command by stating the version number such as:
```
nvm use v0.10.46
```
7. Verify Node version is 0.10.46:
```
node -v
```
7. Install node dependencies:
```
npm install
```
8. To execute the script, you will need executable permission for the file. If you do not have the needed permission you may run: 
```
chmod +x /path/to/your/xlsx-json.js
``` 
9. Finally, to run the script you need to provide four arguments: 
  - The "node" command will execute the JavaScript file
  - Name of JavaScript file to execute, which is xlsx-json in this case
  - Name of excel file to process, sample-lists.xlsx is a file in the data directory of the project for testing
  - A digit of how many worksheets to process
```
node /path/to/your/xlsx-json <filename> #
ex: node script/xlsx-json sample-lists.xlsx 2
```


