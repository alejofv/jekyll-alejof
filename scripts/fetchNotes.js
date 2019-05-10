"use strict";

const fetch = require("node-fetch");
const fs = require("fs");

(async () => {
    // Netlify build webhook for starkidsworld.co site
    const apiUrl = process.env.CONTENT_API_URL || "http://localhost:7071/api/content";
    console.log('Content api url:' + apiUrl)
    
    const contentCount = process.env.CONTENT_COUNT || 10;
    
    // fetch the live data source
    const response = await fetch(apiUrl);
    if (response.status !== 200) {
        throw new Error("Invalid response status: " + response.status);
    }
    
    const data = await response.json();
    console.log("Note count from api: ", data.length);
    
    const dir = './_posts';

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    for (let i = 0; i < data.length; i++) {
        const note = data[i];
        
        // foreach post, write a post file to be processed by Jekyll
        const filename = `${note.date}-${note.slug}`; 
        const content = `---
layout: note
title: ${note.title}
type: ${note.type}
source: "${note.source}"
---

${note.text}
`;      
        fs.writeFileSync(`./_posts/${filename}.md`, content);
    }

    console.info('Content fetch completed successfully!')
})();
