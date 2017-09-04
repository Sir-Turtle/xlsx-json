var parseXlsx = require('excel');
var jsonfile = require('jsonfile');
var path = require('path');
var importfilePath = path.resolve('/Users/Tolga/workspace/' +
	'xlsx-json/data/sample-lists.xlsx');
var picklistName;
var picklistJSON = [];
var worksheets = 2;
jsonfile.spaces = 2;

function constructJSON(picklistName, value) {
	picklistJSON.push({
		name: picklistName,
		value: value
	});
}

function constructParentJSON(picklistName, value, parentValue) {
	picklistJSON.push({
		parents: [parentValue],
		name: picklistName,
		value: value
	});
}

function writeJSON(fileName, picklistJSON) {
	var writePath = path.resolve('/Users/Tolga/workspace/xlsx-json/data/lists/' +
		fileName + '.json');

	jsonfile.writeFile(writePath, picklistJSON, function(err) {
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
	picklistName = data[0][1];
	if(!picklistName){
		console.log('importing regular picklist');
		picklistName = data[0][0];
		console.log('picklistName: ', picklistName);
		for (i = 1; i < data.length; i++) {
			constructJSON(picklistName, data[i][0]);
		}
	} else {
		console.log('importing dependant picklist');
		picklistName = data[0][1];
		console.log('picklistName: ', picklistName);
		for (i = 1; i < data.length; i++) {
			constructParentJSON(picklistName, data[i][1], data[i][0]);
		}
	}

	writeJSON(picklistName, picklistJSON);
	picklistJSON = [];
}

for (var w = 1; w <= worksheets; w++) {
	parseXlsx(importfilePath, w, determineConstructor);
}

