import {Selector, } from 'testcafe'

//prettier-ignore
fixture`Passoword reset test`
.page`http://zero.webappsecurity.com/index.html`
.before(async t=>{
    //Test setup
    //await runDatabaseReset(), sendTestData()
    
})

.beforeEach(async t=>{
    //Runs before each test

    // await t.setPageLoadTimeout(0)
})

.after(async t=>{
    //Cleaning test data 
    // Logging and sending data to monitoring system
})

.afterEach(async t=>{
    //Runs after each test
})


test.skip('User can send a request to change the password', async t=>{
    //Selectors
    const signInButton = Selector('#signin_button')
    const linkToForgottenPass = Selector('a').withText('Forgot your password ?')
    const emailID= Selector('#user_email')
    const successMessage= Selector('div').innerText 

    //Actions
    await t.click(signInButton)
    await t.click(linkToForgottenPass)
    await t.typeText(emailID,'email@example.com',{paste:true})
    await t.pressKey('enter')


    //Assertions

    await t.expect(successMessage).contains('email@example.com')
    await t.expect(emailID.exists).notOk()


})