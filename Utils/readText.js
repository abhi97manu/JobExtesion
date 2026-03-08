const fs = require('fs/promises')

async function readText(filePath) {
    try {
    const Textdata =  await fs.readFile(filePath, 'utf-8')
   
    return Textdata;
    } catch (err) {
        console.error(`Error reading file from disk: ${err}`);
    }
}

module.exports = readText;