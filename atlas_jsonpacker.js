const fs = require("fs");
const lineReader = require('line-reader');
const { delay } = require("lodash");

var atlasDocuments=[]

let fileDir = "./assets/export/goblins-pma.atlas";

function loadAtlasFile(){
    lineReader.eachLine(fileDir, function (line) {
    atlasDocuments.push(line)
        // console.log(line);
    });
    delay(() => {
        console.log(atlasDocuments);
    },1000)
    
}

loadAtlasFile();
function getObject(){
        
}