const {GoogleGenAI} = require('@google/genai');
const dotenv = require('dotenv');

dotenv.config();


const aiAgent = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function AIAgentForResource(resource, content) {

        const response =  await aiAgent.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: ` you are a helpful HR assistant. You are paid very well and are very efficient.
             here is the job description : ${content} 
             and here is my resume : ${resource}
             
             your job is to compare skill set from resume and job descriptiuon and provide me a json object with status as number between 0 to 10 10 being most suitable or highly matched skills
             and 0 being not suitable at all. nothing other than json object.
           `
        })
        return response.text;
}

module.exports = AIAgentForResource;


// async function main() {
//   const response = await aiAgent.models.generateContent({
//     model: "gemini-3-flash-preview",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }

// main();