const puppeteer = require('puppeteer');
const faker = require('C:/Users/Dmitry/JS/node_modules/faker/locale/ru');


(async () => {
    const user = {
        name: faker.name.findName(),
        phone: faker.phone.phoneNumber(),
        age: faker.random.number()
        
    };
        
        const browser = await puppeteer.launch({ "headless": false });
        const page = await browser.newPage();
        await page.goto("http://dvpotekhin.online/");
        await page.type('#client-name', user.name)
        await page.type('#phone', user.phone)
        await page.waitFor(2000)
        await page.select('#sex', 'female')
        await page.waitFor(2000)
        await page.select('#sex', 'male')
        await page.waitFor(2000)
        await page.select('#sex', 'None')
        await page.waitFor(2000)
        await page.type('#age', '34')
        await page.waitFor(2000)
        await page.click('#has-car')
        await page.waitFor(2000)
        await page.click('#hasnot-car')
        await page.waitFor(2000)
        await browser.close();

    })();