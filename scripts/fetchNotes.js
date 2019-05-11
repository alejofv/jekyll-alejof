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

function createPost(note) {
    // foreach post, write a post file to be processed by Jekyll
    const filename = `${note.date}-${note.slug}`;
    const content = `---
layout: note
title: "${note.title}"
type: "${note.type}"
sourceUrl: "${note.sourceUrl || ''}"
sourceName: "${note.sourceName || ''}" 
---

${note.text}
`;
    fs.writeFileSync(`./_posts/${filename}.md`, content);
}

(async () => {
    // Netlify build webhook for starkidsworld.co site
    const apiUrl = process.env.CONTENT_API_URL || "http://localhost:7071/api/content";
    console.log('Content api url:' + apiUrl)
    
    // fetch the live data source
    const response = await fetch(apiUrl);
    if (response.status !== 200) {
        throw new Error("Invalid response status: " + response.status);
    }
    
    const data = await response.json();
    console.log("Note count from api: ", data.length);
    
    const dir = '_posts';
    initDir(dir);

    for (let i = 0; i < data.length; i++) {
        const note = data[i];
        
        createPost(note);
    }

    console.info('Content fetch completed successfully!')
})();
