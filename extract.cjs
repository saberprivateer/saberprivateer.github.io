const fs = require('fs');
const pdf = require('pdf-parse');
let dataBuffer = fs.readFileSync('Resume - Daniel Kamerling - December 2025.pdf');
pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('resume_extracted.txt', data.text);
}).catch(err => {
    console.error(err);
});
