import {Selector, } from 'testcafe'

//prettier-ignore
fixture`Search test`
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


test.skip('User can search in the homepage', async t=>{
    //Selectors
    const searchItem = Selector('#searchTerm')
    const searchResult = Selector('h2')
    const linkText = Selector('div')

    //Actions
    await t.typeText(searchItem, 'online bank', {paste:true})
    await t.pressKey('enter')

    //Assertions
    await t.expect(searchResult.exists).ok()
    await t.expect(searchItem.exists).ok()
    await t.expect(linkText).contains('Zero - Free Access to Online Banking')

 

})