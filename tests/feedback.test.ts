import { Selector, t } from 'testcafe'

import FeedbackPage from '../page-objects/pages/FeedbackPage'

const feedbackPage = new FeedbackPage()

fixture`feedback Test`.page(
	'https://devexpress.github.io/testcafe/example/'
)

test('feedback test', async (t) => {
    await t
        .typeText(feedbackPage.formName, 'name', {paste: true, replace: true})
        .typeText(feedbackPage.formEmail, 'email@sdfsds.com', {paste: true, replace: true})
        .typeText(feedbackPage.formSubject, 'subject', {paste: true, replace: true})
        .typeText(feedbackPage.formComment, 'rmailss@sadfs.com', {paste: true, replace: true})
        .click(feedbackPage.formSubmitButton)
})
