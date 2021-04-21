import {Selector} from 'testcafe'

//prettier-ignore
fixture `Getting started with TestCafe`
    .page`https://devexpress.github.io/testcafe/example/`
    .before(async t=>{
        //Test setup
        //await runDatabaseReset(), sendTestData()
        await t.resizeWindow(800,600)
    })

    .beforeEach(async t=>{
        //Runs before each test

        await t.setTestSpeed(1)
        // await t.setPageLoadTimeout(0)
    })

    .after(async t=>{
        //Cleaning test data 
        // Logging and sending data to monitoring system
    })

    .afterEach(async t=>{
        //Runs after each test
    })

test.only('Run only this test scenario', async t=> {

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

    //click
    await t.click('selector', {options})
    //Double click
    await t.doubleClick('selector', {options})
    //Right click 
    await t.rightClick('selector', {options})
    //Drag element
    await t.drag('selector', 200, 0, {options})
    //Hover 
    await t.hover('selector', {options})
    //Select text
    await t.selectText('selector')
    //Type text
    await t.typeText('selector', 'text')
    //Press key on the keyboard
    await t.pressKey('key')
    //Navigate 
    await t.navigateTo('url')
    //Take screenshot
    await t.takeScreenshot()
    await t.takeElementScreenshot()
    //Resize Window
    await t.resizeWindow(800,600)



    //Assertion - Deep equal 
    await t.expect('foo').eql('foo', 'message', options)
    //Not deep eql
    await t.expect('foo').notEql('foo')
    //OK
    await t.expect(true).ok()
    //Not OK
    await t.expect(true).notOk()
    //Contains 
    await t.expect("foo").contains('Hasib')
    //Not Contains 
    await t.expect("foo").notContains("HasibRahat")
    //Greater or Less than
    await t.expect(10).gt(5)
    await t.expect(10).gte(10)
    await t.expect(10).lt(10)
    await t.expect(10).lte(10)

    //Within 
    await t.expect(10).within(1, 100)
    //Not within 
    await t.expect(10).notWithin(5, 50)


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