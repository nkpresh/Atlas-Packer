const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");
const atlas = require('atlaspack');
const { Image } = require('image-js');

// create a canvas
const width = 128;
const height = 128;
var canvas = createCanvas(width, height);

// Create a starting atlas based on the canvas    
    var img =new Image();
    img.id = i;
    img.src = '';
    img.onload = function () {
        atlas.pack(img);
}

console.log("empty");