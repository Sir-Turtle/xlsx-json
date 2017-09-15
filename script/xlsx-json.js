var parseXlsx = require('excel');
var jsonfile = require('jsonfile');
const path = require('path');
const projectPath = path.resolve(__dirname + '/..');
const dataSourcePath = path.join(projectPath, '/data');
var listName;
var listJSON = [];
jsonfile.spaces = 2;

function constructJSON(listName, value) {
	listJSON.push({
		name: listName,
		value: value
	});
}

function constructParentJSON(listName, value, parentValue) {
	listJSON.push({
		parents: [parentValue],
		name: listName,
		value: value
	});
}

function writeJSON(fileName, listJSON) {
	var writePath = path.join(dataSourcePath, '/json-lists/' +
		fileName + '.json');

	jsonfile.writeFile(writePath, listJSON, function(err) {
		if (err) {
			console.error('writeFile error: ', err);
			return;
		}
	});
}

function determineConstructor(err, data) {
	if (err) {
		console.error('determineConstructor error: ', err);
		return;
	}

	var i;
	listName = data[0][1];
	if(!listName){
		console.log('parsing independent list');
		listName = data[0][0];
		console.log('listName: ', listName);
		for (i = 1; i < data.length; i++) {
			constructJSON(listName, data[i][0]);
		}
	} else {
		console.log('parsing dependant list');
		listName = data[0][1];
		console.log('listName: ', listName);
		for (i = 1; i < data.length; i++) {
			constructParentJSON(listName, data[i][1], data[i][0]);
		}
	}

	writeJSON(listName, listJSON);
	listJSON = [];
}


if (process.argv.length < 4) {
	console.warn('Usage: node script/xlsx-json <filename> 2');
} else {
	for (var w = 1; w <= process.argv[3]; w++) {
		parseXlsx(path.join(dataSourcePath, process.argv[2]), process.argv[3], determineConstructor);
	}
}

