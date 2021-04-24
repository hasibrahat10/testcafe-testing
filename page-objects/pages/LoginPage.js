import {Selector, t } from 'testcafe'

class LoginPage{
    constructor(){

        //selector 

        this.loginForm = Selector('#login_form')
        this.userNameInput = Selector('#user_login')
        this.userPassInput = Selector('#user_password')
        this.submitButton = Selector('.btn-primary')
        this.errorMessage = Selector('.alert-error')
        this.accountSummaryTab = Selector('#account_summary_tab')
        this.linkToForgottenPass = Selector('a').withText('Forgot your password ?')
      
    }

    //Method declare to test define

    async loginToApp(username, password){
        await t
        .typeText(this.userNameInput, username, {paste:true, replace:true})
        .typeText(this.userPassInput, password, {paste:true, replace:true})
        .click(this.submitButton)
    }
}
export default LoginPage