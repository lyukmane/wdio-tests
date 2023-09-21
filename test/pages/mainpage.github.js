class MainPage{

    get buttonSingUp() { return $('(//a[contains(.,"Sign up")])[1]')}
    get titleH2() { return $('//h2[contains(.,"The place")]')}
    get buttonStatrFree() {return $('(//a[contains(.,"Start a free")])[3]')}
    get buttonSubsribe() { return $('//a[contains(.,"Sub")]')}
    get buttonSearch() { return $('button[data-target="qbsearch-input.inputButton"]')}
    get inputSearch() { return $('#query-builder-test')}
    get menuPricing() { return $('nav[aria-label="Global"] a[href="/pricing"]')}

    async clickOnSingUpBtn(value){
        await this.buttonSingUp.click()
    }

    async clickOnStartFreeBtn(value){
        await this.buttonStatrFree.click()
    }

    async clickOnSubscribeBtn(value){
        await this.buttonSubsribe.click()
    }

    async clickOnInputSearchBtn(value){
        await this.buttonSearch.click()
    }

    async setInputSearch(value){
        await this.inputSearch.addValue(value)
    }

    async clickOnMenuPricingBtn(value){
        await this.menuPricing.click()
    }

}
export default new MainPage()