'use strict';

const path = require('path');
const fs = require('fs');
const dirEntries = fs.readdirSync(path.join(__dirname, "../bin"));
let adltDir = dirEntries.find((dirEntry) => dirEntry.startsWith("adlt-v"));

module.exports.adltPath = path.resolve(__dirname, "../bin", adltDir, `adlt${process.platform === 'win32' ? '.exe' : ''}`);
