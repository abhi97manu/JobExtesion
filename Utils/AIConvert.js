import {GoogleGenAI} from '@google/genai'
import dotenv from 'dotenv'

dotenv.config();


const aiAgent = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function AIAgentForResource( content , resource = null,) {
        try {
                console.log("loading AI agent ....")
                 const response =  await aiAgent.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: content
        })
        return response.text;

        } catch (error) {
                console.log("error", error)
        }
       
}
export default AIAgentForResource


// async function main() {
//   const response = await aiAgent.models.generateContent({
//     model: "gemini-3-flash-preview",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }

// main();