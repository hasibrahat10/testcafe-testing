import {Selector, } from 'testcafe'

//prettier-ignore
fixture`Login Test`
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


test.skip('User cannot login with invalid creentials', async t=>{
    const signInButton = Selector('#signin_button')
    await t.click(signInButton)

    const loginForm = Selector('#login_form')
    await t.expect(loginForm.exists).ok()

    const userNameInput = Selector('#user_login')
    const userPassInput = Selector('#user_password')

    await t.typeText(userNameInput,'invalid username',{paste:true})
    await t.typeText(userPassInput,'invalid password',{paste:true})

    await t.wait(2000)
    const submitButton = Selector('.btn-primary')
    await t.click(submitButton)

    const errorMessage = Selector('.alert-error').innerText
    await t.expect(errorMessage).contains('Login and/or password are wrong.')
    await t.wait(2000)
})

test('User can login with valid creentials', async t=>{
    const signInButton = Selector('#signin_button')
    await t.click(signInButton)

    const loginForm = Selector('#login_form')
    await t.expect(loginForm.exists).ok()

    const userNameInput = Selector('#user_login')
    const userPassInput = Selector('#user_password')

    await t.typeText(userNameInput,'username',{paste:true})
    await t.typeText(userPassInput,'password',{paste:true})

    await t.wait(2000)
    const submitButton = Selector('.btn-primary')
    await t.click(submitButton)


    const accountSummaryTab = Selector('#account_summary_tab')
    await t.expect(accountSummaryTab.exists).ok()
    await t.expect(loginForm.exists).notOk()

    await t.wait(2000)

    const userIcon = Selector('.icon-user')
    await t.click(userIcon)

    const logout = Selector('#logout_link')
    await t.click(logout)

    await t.expect(logout.exists).notOk()
    await t.expect(signInButton.exists).ok()
    
    await t.wait(2000)
})