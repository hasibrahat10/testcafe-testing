import { Selector, t } from 'testcafe';

class BasePage{

	async waitFor(milliseconds) {
		await t.wait(milliseconds)
	}
	async setTestSpeed(setLavel) {
		await t.setTestSpeed(setLavel)
	}
}
export default BasePage