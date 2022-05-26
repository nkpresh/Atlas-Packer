const e = require("express");
const fs = require("fs");
const lineReader = require('line-reader');
const { delay } = require("lodash");

var atlasDocuments = []
var objectCollection = new Map();
var fileDir = "./assets/export/goblins-pma.atlas";
var finishedProduct = {};

function loadAtlasFile() {
    lineReader.eachLine(fileDir, function (line) {
        atlasDocuments.push(line)
    });
    delay(() => {
        breakAtlas(atlasDocuments);
    }, 1000)

}

function breakAtlas(textFile) {
    for (var i = 0; i < textFile.length; i++) {
        var line = textFile[i].toString();
        if (line != "") {
            // console.log(line);
            if (!line.includes(":") && line[0] != '' && !line.includes(".")) {
                let varIndex = i;
                varIndex += 1;
                let stringVariables = [];
                while (varIndex < textFile.length && textFile[varIndex][0] == ' ') {
                    // stringVariables.push(textFile[varIndex])
                    extractVariables(textFile[varIndex], line)

                    // objectCollection.set(line, variables);
                    varIndex += 1;
                }
            }
        }
        // finishedProduct[line] = { stringVariables };
    }
    // console.log(line);
}
function extractVariables(stringVar, line) {
    let columnIndex = stringVar.indexOf(":");
    let key = stringVar.slice(1, columnIndex);
    let value = stringVar.slice(columnIndex + 2, stringVar.length);
    console.log(line);
    finishedProduct[line] = {}
    if (value == "false") {
        value = false;
    } else if (value == "true") {
        value = true;
    }
    else if (!Number.isNaN(Number(value))) {
        value = Number(value);
        // console.log(value);
    }
    else if (value.includes(",")) {
        let xValue = value.slice(0, value.indexOf(","));
        let yValue = value.slice(value.indexOf(",") + 2, value.length);
        if (!Number.isNaN(Number(xValue)) && !Number.isNaN(Number(yValue))) {
            // console.log(key)
            if (key == " xy") {
                let position = {}
                position.x = Number(xValue);
                position.y = Number(yValue);
                value = position;
                // console.log(position+ " pos")
            } else if (key == " offset") {
                let offset = {}
                offset.x = Number(xValue);
                offset.y = Number(yValue);
                value = offset;
                // console.log(offset)
            }
        }
        // console.log(key);
    }
    else {
        return new Error("this item is not compatable: " + value);
    }
    finishedProduct[line][key] = value;
    return finishedProduct;
}

function nodeTest() {
    let arrayObj = ["0", "Like", "learn", "7,7", "Look", "9", "Life", "Lenghtfully", "19", "Lie", "Low", "Lately"];
    const dataArr = arrayObj.reduce((acc, cur, index) => ({ ...acc, [String.fromCharCode(97 + index)]: cur }), Object.create({}))
    let testFunc = testReturn();
    console.log(testFunc);
}
loadAtlasFile();
// nodeTest();

function testReturn() {
    return "working";
}