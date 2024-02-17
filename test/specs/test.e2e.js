import { expect } from '@wdio/globals'
import assert from "assert/strict"
import LoginPage from "./../pages/main.page.js"
import MainPage from "./../pages/mainpage.github.js"
import SingUp from "./../pages/signup.page.js"
import { waitForDebugger } from 'inspector'
import PricingPage from "./../pages/pricing.page.js"

describe("Webdriverio main page", () => {
    xit('should have correct title', async () => {
        await browser.url('https://webdriver.io/');

        const title = await browser.getTitle()
        console.log(title);
        
        await expect(browser).toHaveTitle(
        'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
    });

    xit('should show addValue command', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let input = await $("#username")
        await input.addValue("hello")
        await browser.pause(2000)
        
        await input.addValue(123)
        await browser.pause(2000)
        
        await expect(input).toHaveValue(
        'hello123')
    });

    xit('should show setValue command', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let input = await $("#username")
        await input.setValue("hello")
        await browser.pause(2000)
        
        console.log(await input.getValue())
        await expect(input).toHaveValue(
        "hello")
    });

    xit('should show click command', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let loginButton = await $(".radius")
        await browser.pause(2000)
        await loginButton.click()
        await browser.pause(4000)

        let inputUsername = await $("#username")
        await inputUsername.addValue("tomsmith")
        await browser.pause(2000)

        let inputPassword = await $("#password")
        await inputUsername.addValue("SuperSecretPassword!")
        await browser.pause(2000)
        
        await loginButton.click()
        await browser.pause(4000)
    });

     xit('should show getAttribute command', async () => {
        await browser.url('https://dou.ua/search');

        let inputSearch = await $("#gsc-i-id1")
        let attr = await inputSearch.getAttribute("aria-label")
        console.log("Placeholder attribute is: " + attr) // outputs: шукати

        await inputSearch.setValue("Cat")
        attr = await inputSearch.getValue()
        await browser.pause(2000)
        console.log("Value attribute  is: " + attr) // outputs: Cat
    });

    xit('should show getLocation command', async () => {
        await browser.url('https://dou.ua');

        let inputSearch = await $("#txtGlobalSearch")
        let location = await inputSearch.getLocation()
        console.log("Location is: " + location) // outputs: x, y

        let xLocation = await inputSearch.getLocation("x")
        console.log("Location by x is: " + xLocation) // outputs: x
    });

    xit('should show getText command', async () => {
        await browser.url('https://webdriver.io');

        let subtitle = await $(".hero__subtitle")
        console.log("Subtitle text is: " + await subtitle.getText()) // outputs: Next-gen browser...
    });

    xit('should show Homework Task 1', async () => {
        await browser.url('https://webdriver.io');

        let api_nav_button = await $('//a[@class="navbar__item navbar__link"][contains(.,"API")]')
        api_nav_button.click()
        await browser.pause(2000)
        await expect(browser).toHaveUrl("https://webdriver.io/docs/api")
        
        let breadcrumps = await $('//span[@class="breadcrumbs__link"]')
        breadcrumps.click()
        await expect(breadcrumps).toHaveText("Introduction")
        
        let h1 = await $('//header/h1')
        await expect(h1).toHaveText("Introduction")

        let link = await $('(//div[@class="theme-doc-markdown markdown"]/p/a)[1]')
        let link_attr = await link.getAttribute("href")
        console.log("Href attribute is: " + link_attr) // outputs: link
        await expect(link).toHaveAttribute('href', '/docs/api/webdriver')

        let search_locator = await $('//span[@class="DocSearch-Button-Placeholder"]')
        search_locator.click()
        let search_input_locator = await $('#docsearch-input')
        search_input_locator.addValue("all is done")
        await browser.pause(2000)
        search_input_locator.setValue("")

        //await expect(breadcrumps).toHaveText("Introduction")
        
    });

    xit("should show if an element is clickable", async () => {
        await browser.url('https://webdriver.io/');

        const blogButton = await $('.button[href="/docs/gettingstarted"]')
        let clickable = await blogButton.isClickable()
        console.log("Is clickable: " + clickable) // outputs: true

    });

    xit("should show if an element is displayed", async () => {
        await browser.url('https://webdriver.io/');

        const blogButton = await $('.button[href="/docs/gettingstarted"]')
        let displayed = await blogButton.isDisplayed()
        console.log("Is displayed " + displayed) // outputs: true

    });

    xit("should show if an element is visible", async () => {
        await browser.url('https://webdriver.io/');

        const blogButton = await $('.button[href="/docs/gettingstarted"]')
        let displayedInViewport = await blogButton.isDisplayedInViewport()
        console.log("Is blog button displayed in viewport: " + displayedInViewport) // outputs: true

        const footer = await $('.footer_link-item[href="/docs/gettingstarted"]')
        let footerIsdisplayedInViewport = await footer.isDisplayedInViewport()
        console.log("Is footer button displayed in viewport: " + footerIsdisplayedInViewport) // outputs: false
    });

    xit("should show if an element is enabled", async () => {
        await browser.url('https://webdriver.io/');

        const getStartedButton = await $('.button[href="/docs/gettingstarted"]')
        let isEnabled = await getStartedButton.isEnabled()
        console.log("Is get started button enabled: " + isEnabled) // outputs: true

    });

    xit("should show if an element is focused", async () => {
        await browser.url('https://webdriver.io/');

        const getStartedButton = await $('.button[href="/docs/gettingstarted"]')
        let isFocused = await getStartedButton.isFocused()
        console.log("Is get started button before click: " + isFocused) // outputs: false
        await browser.pause(2000)
        await getStartedButton.click()
        console.log("Is get started button after click: " + isFocused) // outputs: true
        await browser.pause(2000)
    });

    xit("should show movement to element action", async () => {
        await browser.url('https://webdriver.io/');

        const getStartedLink = await $('//a[@href="/docs/gettingstarted"][@class="footer__link-item"]')
        await browser.pause(2000)
        await getStartedLink.scrollIntoView()
        await browser.pause(2000)
    });

    xit("should show save screenshot command", async () => {
        await browser.url('https://webdriver.io/');

        const getStartedLink = await $('//a[@href="/docs/gettingstarted"][@class="footer__link-item"]')
        await browser.pause(2000)
        await getStartedLink.scrollIntoView()
        await browser.pause(2000)
        await getStartedLink.saveScreenshot('linkScreenshot.png')
    });

    xit("should switch to another window", async () => {
        await browser.url('https://webdriver.io/');

        await browser.newWindow('https://google.com/')
        await browser.pause(2000)

        await browser.switchWindow('https://webdriver.io/')
        await browser.pause(2000)
    });

    xit("should show waitUntil command", async () => {
        await browser.url('https://webdriver.io/');

        await browser.waitUntil(async () => {
            return $('.button[href="/docs/gettingstarted"]').isDisplayed();
        }, 5000, "Button is not displayed")
    });

    xit("should get html for certain elements", async () => {
        await browser.url('https://webdriver.io/');

        const outerHTML = await $('.dropdown__menu').getHTML()
        console.log("outerHTML :" + outerHTML)

        const innerHTML = await $('.dropdown__menu').getHTML(false)
        console.log("innerHTML :" + innerHTML)
    });

    xit("should show addValue commad", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        await LoginPage.setUsernameInput(123)
        await browser.pause(2000)

        await LoginPage.username.addValue("123")
        await browser.pause(2000)

        await expect(LoginPage.username).toHaveValue("123123")

        await LoginPage.setPasswordInput("fdsffsf")
        
        await LoginPage.clickOnLoginBtn()
        await browser.pause(2000)

    })
    
    // HOMEWORKS

    xit('should show Homework Task 1', async () => {
        await browser.url('https://webdriver.io');

        let api_nav_button = await $('//a[@class="navbar__item navbar__link"][contains(.,"API")]')
        api_nav_button.click()
        await browser.pause(2000)
        await expect(browser).toHaveUrl("https://webdriver.io/docs/api")
        
        let breadcrumps = await $('//span[@class="breadcrumbs__link"]')
        breadcrumps.click()
        await expect(breadcrumps).toHaveText("Introduction")
        
        let h1 = await $('//header/h1')
        await expect(h1).toHaveText("Introduction")

        let link = await $('(//div[@class="theme-doc-markdown markdown"]/p/a)[1]')
        let link_attr = await link.getAttribute("href")
        console.log("Href attribute is: " + link_attr) // outputs: link
        await expect(link).toHaveAttribute('href', '/docs/api/webdriver')

        let search_locator = await $('//span[@class="DocSearch-Button-Placeholder"]')
        search_locator.click()
        let search_input_locator = await $('#docsearch-input')
        search_input_locator.addValue("all is done")
        await browser.pause(2000)
        search_input_locator.setValue("")
    });

    xit('should show Homework Task 2', async () => {
        await browser.url('https://webdriver.io');

        let api_nav_button = await $('nav a[href="/docs/api"]')
        api_nav_button.click()
        
        let blog_fooet_link = await $('footer a[href="/blog"]')
        blog_fooet_link.scrollIntoView()

        let protocols_link = await $('nav[aria-label="Docs pages navigation"] a[href="/docs/api/protocols"]')
        let displayedInViewport = await protocols_link.isDisplayedInViewport()
        console.log("Is Protocol Commands button displayed in viewport: " + displayedInViewport) // outputs: true
        let clickable = await protocols_link.isClickable()
        console.log("Is Protocol Commands button clickable: " + clickable) // outputs: true
        protocols_link.click()
        await browser.waitUntil(async () => {
            return $('h2#webdriver-protocol').isDisplayed();
        }, 5000, "Title is not displayed")
    });

    it('should show Homework FInal Case 1', async () => {
        // CASE 1
        await browser.url('https://github.com/');

        await MainPage.clickOnSingUpBtn()
        await SingUp.titleH1.waitForDisplayed({ timeout: 3000 })
        await expect(SingUp.titleH1).toHaveText("Welcome to GitHub! Let's begin the adventure")
        await expect(SingUp.titleH1).toBeDisplayed()

        await SingUp.inputEmail.waitForClickable({ timeout: 5000 });
        await SingUp.setEmailInput("jilax33393@alvisani.com")
        await SingUp.buttonContinueForEmail.waitForClickable({ timeout: 5000 });
        await SingUp.clickOnContinueBtnForEmail()

        await SingUp.inputPassword.waitForClickable({ timeout: 3000 });
        await SingUp.setPasswordInput("PASSdadasdadsadewqQ1")
        await SingUp.buttonContinueForPassword.waitForClickable({ timeout: 3000 });
        await SingUp.clickOnContinueBtnForPassword()

        await SingUp.inputUsername.waitForClickable({ timeout: 3000 });
        await SingUp.setUsernameInput("USERdasdsadasdfsdfserwr")
        await SingUp.buttonContinueForUsername.waitForClickable({ timeout: 3000 });
        await SingUp.clickOnContinueBtnForUsername()

        await SingUp.inputYesNo.waitForClickable({ timeout: 3000 });
        await SingUp.setYesNoInput("n")
        await SingUp.buttonContinueForYesNo.waitForClickable({ timeout: 3000 });
        await SingUp.clickOnContinueBtnForYesNo()
    });

    it('should show Homework FInal Case 2', async () => {
        // CASE 2
        await browser.url('https://github.com/');
        await MainPage.titleH2.scrollIntoView()
        await MainPage.buttonStatrFree.waitForDisplayed({ timeout: 3000 });
        await expect(MainPage.buttonStatrFree).toBeDisplayed()
        await MainPage.clickOnStartFreeBtn()
        let title = await $('//h1[contains(.,"Pick")]')
        await expect(title).toBeDisplayed
        let button = await $('//p[contains(.,"Build and deploy to GitHub-hosted cloud environments, directly from your repositories.")]')
        await button.click()

        
    });

    it('should show Homework FInal Case 3', async () => {
        // CASE 3
        await browser.url('https://github.com/');
        await MainPage.buttonSubsribe.scrollIntoView()
        await MainPage.buttonSubsribe.waitForClickable({ timeout: 3000 });
        await expect(MainPage.buttonStatrFree).isClickable
        await MainPage.clickOnSubscribeBtn()
        await expect(browser).toHaveUrl("https://resources.github.com/newsletter/")
        
        let titleSub = await $('//h1[contains(.,"Sub")]')
        await expect(titleSub).toBeDisplayed()
        let inputEmail = await $('input[type="email"]')
        await inputEmail.scrollIntoView()
        await inputEmail.addValue("fdsfsfsf@fdfss.fsfss")
        let dropmenu = await $('#country')
        await dropmenu.click()
        let element_menu_ua = await $('#country option[value="UA"]')
        await element_menu_ua.click()
        let form = await $('#form')
        await form.click()
        let subscribeButton = await $('button[type="submit"]')
        let inputCheckbox = await $('input[type="checkbox"]')
        await subscribeButton.scrollIntoView()
        await inputCheckbox.click()
        await subscribeButton.click()
        let titleThanks = await $('#hero-section-brand-heading')
        await expect(titleThanks).toBeDisplayed()

    });

    it('should show Homework FInal Case 4', async () => {
        // CASE 4
        await browser.url('https://github.com/');
        
        await MainPage.clickOnInputSearchBtn()
        await MainPage.setInputSearch("act")
        await browser.keys(['Enter'])
        await browser.pause("5000")
        let results = await $('div[data-testid="results-list"] a em')
        //await expect(text_result).toHaveText("act")
        console.log("Subtitle text is: " + await results.getText())
        await expect(results).toHaveText("act") 
    });

    it('should show Homework FInal Case 5', async () => {
        // CASE 5
        await browser.url('https://github.com/');
        
        await MainPage.clickOnMenuPricingBtn()
        await expect(PricingPage.titleGet).toBeDisplayed()
        await PricingPage.linkCompare.scrollIntoView()
        await expect(PricingPage.titleCompare).toBeDisplayed()
    });
    
});

