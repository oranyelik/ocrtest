/**
 * Created by oranyelik on 4/19/17.
 */
// https://www.npmjs.com/package/node-tesseract#usage
'use strict';

const screenShotImg = __dirname + '/computerimgs/screenshot.png';
const wallpaperImg = __dirname + '/computerimgs/wallpaper.png';
const tesseract = require('node-tesseract');


console.log(`Analyzing: ${wallpaperImg}...`);
tesseract.process(wallpaperImg,function(err, text) {
    if(err) {
        console.error(err);
    } else {
        console.log(text);
    }
});

console.log('Analyze wallpaper.png... COMPLETE!');
console.log(`Analyzing: ${screenShotImg}...`);

tesseract.process(screenShotImg,function(err, text) {
    if(err) {
        console.error(err);
    } else {
        console.log(text);
    }
});

console.log('Analyze screenshot.png... COMPLETE!');
