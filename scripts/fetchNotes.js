"use strict";

const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");

/**
 * Remove directory recursively - a la `rm -Rf`
 * @param {string} dir_path
 * @see https://stackoverflow.com/a/42505874/3027390
 */
function rimraf(dir_path) {
    if (fs.existsSync(dir_path)) {
        fs.readdirSync(dir_path).forEach(function (entry) {
            var entry_path = path.join(dir_path, entry);
            if (fs.lstatSync(entry_path).isDirectory()) {
                rimraf(entry_path);
            } else {
                fs.unlinkSync(entry_path);
            }
        });
        fs.rmdirSync(dir_path);
    }
}

function initDir(dir_path) {
    if (fs.existsSync(dir_path))
        rimraf(dir_path);
    
    if (!fs.existsSync(dir_path))    
        fs.mkdirSync(dir_path);
}

async function createPost(note) {
    console.log(note.name);

    const response = await fetch(note.url);
    console.log(`fetch ${response.statusText}`);
    if (response.status !== 200) return;

    const content = await response.text()
    fs.writeFileSync(`./_posts/${note.name}`, content);
    console.log('file created!');
}

(async () => {
    const dir = '_posts';
    initDir(dir);

    // AlejoF notes api endpoint
    const apiUrl = `${process.env.CONTENT_API_URL || "http://localhost:7071/api/content"}/alejof-notes`;
    const apiKey = process.env.CONTENT_API_KEY;
    console.log('Content api url:' + apiUrl);
    
    // fetch the live data source
    const response = await fetch(`${apiUrl}?code=${apiKey}`);
    if (response.status !== 200) {
        throw new Error("Invalid response status: " + response.status);
    }
    
    const data = await response.json();
    console.log("Note count from api: ", data.length);

    for (const item of data) {
        await createPost(item);
    }
    
    console.info('Content fetch completed successfully!')
})();
