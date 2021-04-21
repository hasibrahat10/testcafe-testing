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


    await t.typeText('#developer-name','John')
    await t.wait(3000)
    await t.click('#submit-button')


    await t.expect(Selector('#article-header').innerText).contains('John')
})