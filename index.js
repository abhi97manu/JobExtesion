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

  
//await page.type('input#usernameField',process.env.USERNAME)
//await page.type ('input#passwordField',process.env.PASSWORD)

await page.click(
       "button[type='submit'].waves-effect.waves-light.btn-large.btn-block.btn-bold.blue-btn.textTransform",
    );


  
};

getQoutes();
