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
  await page.waitForSelector("article.jobTuple.bgWhite.z-depth-1");
  
  const jobs = await page.evaluate(() => {

    let listofJobs = [];
    const jobElements = document.querySelectorAll(
      "article.jobTuple.bgWhite.z-depth-1",
    );
        Array.from(jobElements).map( (job) => {
           listofJobs.push({
            title: job.querySelector("p").innerText,
            company: job.querySelector("span.dspIB.valignM.subTitle.ellipsis.dspIB").innerHTML,
        })
    })
    // const jobarticle =  jobElements[0].outerHTML;
    console.log(listofJobs);
  });

  console.log(jobs);
};

getQoutes();
