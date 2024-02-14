import { Actor } from 'apify';
import puppeteer from 'puppeteer';

Actor.main(async () => {
    console.log('Actor starting...');

    // Fetch input using Apify.getInput()
    const input = await Actor.getInput();

    // Validate input
    // if (!input || !input.apollo_username || !input.apollo_password || !input.list_url) {
    //     console.log('Missing required input fields.');
    //     return;
    // }

    // Use input values
    const baseUrl = "";//input.list_url; // Use the list URL from the input
    const email = "";//input.apollo_username; // Use the Apollo email from the input
    const password = "";//input.apollo_password; // Use the Apollo password from the input


    // Start the Puppeteer browser

    console.time("ScriptRunTime");
    const browser = await puppeteer.launch({
        headless: false, // Set to true to run headless
        defaultViewport: null
    });

    const page = await browser.newPage();
    await page.goto('https://egy.almaviva-visa.it/');
    await page.waitForTimeout(5000);
    
    await browser.close();
    console.timeEnd("ScriptRunTime");// Your Actor's logic here
});
