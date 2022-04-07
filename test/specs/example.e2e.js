describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        //await browser.url(`https://skillbox.ru/`)
        
       const puppeteer = await browser.getPuppeteer()
       const page = (await puppeteer.pages())[0]

       await page.goto(`https://skillbox.ru/`)

       await (await $(".tabs-list a[href='/code/']")).click()
       
    });
});

