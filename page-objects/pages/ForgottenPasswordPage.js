import {Selector, t } from 'testcafe'


class ForgottenPasswordPage{
    constructor(){
        this.emailID= Selector('#user_email')
        this.successMessage= Selector('div')
    }
}

export default ForgottenPasswordPage