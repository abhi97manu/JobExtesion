import readText from "./Utils/readText.js";
import getQoutes from "./index.js"
import AIAgentForResource from "./Utils/AIConvert.js";

async function main() {
  const data = await readText("./Files/Resume.txt");
//   const json =
//     await AIAgentForResource(`Read the following data : ${data} and extract job description, location, years of experienceand key skills. Also convert it into a json format and return me only the json format lie : 
//         {
//     "exp" : 4,
//     "location" : ["jasj"],
//     "skills" : ["java", "c++"],
//     "Title" : "fullstack"

// }  `);

//   const myDetails = json;

  await getQoutes(null)

}
main();
