class PricingPage{

    get titleGet() { return $('h1.h2-mktg')}
    get linkCompare() { return $('a[href="#compare-features"]')}
    get titleCompare() { return $('h1.h1')}
    
    

    async clickOnSingUpBtn(value){
        await this.buttonSingUp.click()
    }

    
    async setInputSearch(value){
        await this.inputSearch.addValue(value)
    }


}
export default new PricingPage()