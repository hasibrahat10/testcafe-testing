import {Selector} from 'testcafe'

//prettier-ignore
fixture `Getting started with TestCafe`
    .page`https://devexpress.github.io/testcafe/example/`
    .before(async t=>{
        //Test setup
        //await runDatabaseReset(), sendTestData()
    })

    .beforeEach(async t=>{
        //Runs before each test

        await t.setTestSpeed(1)
    })

    .after(async t=>{
        //Cleaning test data 
        // Logging and sending data to monitoring system
    })

    .afterEach(async t=>{
        //Runs after each test
    })

test('My first testcafe test', async t=> {

    const developer_name_input= Selector('#developer-name')
    const submit_button = Selector('#submit-button')
    const article_text= Selector('#article-header').innerText
    
    // whole page target
    // await t.takeScreenshot({fullPage:true}) 
    await t.takeElementScreenshot(submit_button) //single element

    await t.typeText(developer_name_input,'John')
    await t.wait(2000)
    await t.click(submit_button)
    await t.expect(article_text).contains('John')
})