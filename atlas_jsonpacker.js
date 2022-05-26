const e = require("express");
const fs = require("fs");
const lineReader = require('line-reader');
const { delay } = require("lodash");

var atlasDocuments = []
var fileDir = "./assets/export/goblins-pma.atlas";
var finishedProduct = {};




async function loadAtlasFile(dir) {
    lineReader.eachLine(dir, function (line) {
        // atlasDocuments.push(line)
        console.log("still reading")
    });
    
    let complete = await console.log("done");
}

function breakAtlas(textFile) {
    for (var i = 0; i < textFile.length; i++) {
        var line = textFile[i].toString();
        if (line != "") {
            if (!line.includes(":") && line[0] != '' && !line.includes(".")) {
                let varIndex = i;
                varIndex += 1;
                finishedProduct[line] = {}
                while (varIndex < textFile.length && textFile[varIndex][0] == ' ') {
                    extractVariables(textFile[varIndex], finishedProduct[line])
                    varIndex += 1;
                }
            }
        }
    }
    return finishedProduct
}
function extractVariables(stringVar, line) {
    let columnIndex = stringVar.indexOf(":");
    let key = stringVar.slice(1, columnIndex);
    let value = stringVar.slice(columnIndex + 2, stringVar.length);    
    if (value == "false") {
        value = false;
    } else if (value == "true") {
        value = true;
    }
    else if (!Number.isNaN(Number(value))) {
        value = Number(value);
    }
    else if (value.includes(",")) {
        let xValue = value.slice(0, value.indexOf(","));
        let yValue = value.slice(value.indexOf(",") + 2, value.length);
        if (!Number.isNaN(Number(xValue)) && !Number.isNaN(Number(yValue))) {
            if (key == " xy") {
                let position = {}
                position.x = Number(xValue);
                position.y = Number(yValue);
                value = position;
            } else if (key == " offset") {
                let offset = {}
                offset.x = Number(xValue);
                offset.y = Number(yValue);
                value = offset;
            } else if (key == " size") {
                let size = {}
                size.x = Number(xValue);
                size.y = Number(yValue);
                value = size;
            } else if (key == " orig") {
                let orig = {}
                orig.x = Number(xValue);
                orig.y = Number(yValue);
                value = orig;
            }
        }
    }
    else {
        return new Error("this item is not compatable: " + value);
    }
    line[key] = value;
    return line;
}
loadAtlasFile(fileDir);
    // breakAtlas(atlasDocuments);
    // console.log("finished reading");
// process_atlas(fileDir);