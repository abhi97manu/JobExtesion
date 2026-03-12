import puppeteer from "puppeteer";
import dotenv from "dotenv";
dotenv.config();

 const getQoutes = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();

  await page.goto("https://www.naukri.com/mnjuser/homepage", {
    waitUntil: "networkidle0",
  });

  await page.waitForSelector("input#usernameField");
  await page.waitForSelector("input#passwordField");

  await page.type("input#usernameField", "abhi3144.manu@gmail.com");
  await page.type("input#passwordField", process.env.PASSWORD);

  await Promise.all([
    page.waitForNavigation({ waitUntil: "networkidle0" }),
    page.click(
      "button[type='submit'].waves-effect.waves-light.btn-large.btn-block.btn-bold.blue-btn.textTransform",
    ),
  ]);

  await Promise.all([
    page.waitForNavigation({ waitUntil: "networkidle0" }),
    page.click(
      "li.nI-gNb-custom-Jobs.nI-gNb-menuItems a.nI-gNb-menuItems__anchorDropdown",
    ),
  ]);

  //await page.waitForNavigation({ waitUntil: "networkidle2" });
  //await page.waitForSelector("article.jobTuple.bgWhite.z-depth-1");

 const article = await page.$("article.jobTuple.bgWhite.z-depth-1");

 const [newPage] = await Promise.all([
  new Promise((resolve) => browser.once("targetcreated", target => resolve(target.page()))),
  
  article.click(),
]);
  //console.log("article",article);
  // await Promise.all([
  // // page.waitForNavigation(),
  //     article.click()
  // ])


  await newPage.waitForNavigation({ waitUntil: "networkidle2" });

 // await newPage.waitForSelector("button#job_header");
  const button = await newPage.$(".styles_job-header-container___0wLZ button#apply-button");
  if(button)
   {
  // const [experienceLevel, location, skillset] = await Promise.all([
  //     await newPage.$eval("div.styles_jhc__exp__k_giM span",exp=> exp.textContent  )
     
  // ])
  
   const stacks = await newPage.$eval("div.styles_key-skill__GIPn_ div" , options =>  options.outerHtml )
   // const minYear = experienceLevel.split("").slice(0,1).reduce(el=> el)
  console.log(stacks)
 // await button.click();
   }

   else{
    await newPage.close()
   }

   await page.reload()

};

export default getQoutes
