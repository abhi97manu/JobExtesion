const run = require('./Utils/pdfRead');
const readText = require('./Utils/readText');
const AIAgentForResource = require('./Utils/AIConvert');


async function main() {
    
    const resume = await readText("./Resume.txt")
        
    const jdesc = await readText("./JD.txt")
    
    

    const response = await AIAgentForResource(resume, jdesc);

    console.log("response", response);

}

main()