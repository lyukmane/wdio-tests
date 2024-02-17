class SingUp{

    get titleH1() { return $('h1.sr-only')}
    get inputEmail() { return $('#email')}
    get inputPassword() { return $('#password')}
    get inputUsername() { return $('#login')}
    get inputYesNo() { return $('#opt_in')}

    get buttonContinueForEmail() { return $('button[data-continue-to="password-container"]')}
    get buttonContinueForPassword() { return $('button[data-continue-to="username-container"]')}
    get buttonContinueForUsername() { return $('button[data-continue-to="opt-in-container"]')}
    get buttonContinueForYesNo() { return $('button[data-continue-to="captcha-and-submit-container"]')}

    async setEmailInput(value){
        await this.inputEmail.addValue(value)
    }

    async setPasswordInput(value){
        await this.inputPassword.addValue(value)
    }

    async setUsernameInput(value){
        await this.inputUsername.addValue(value)
    }

    async setYesNoInput(value){
        await this.inputYesNo.addValue(value)
    }

    async clickOnContinueBtnForEmail(value){
        await this.buttonContinueForEmail.click()
    }

    async clickOnContinueBtnForPassword(value){
        await this.buttonContinueForPassword.click()
    }

    async clickOnContinueBtnForUsername(value){
        await this.buttonContinueForUsername.click()
    }

    async clickOnContinueBtnForYesNo(value){
        await this.buttonContinueForYesNo.click()
    }

}
export default new SingUp()