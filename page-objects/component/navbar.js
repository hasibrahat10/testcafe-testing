import { Selector, t } from 'testcafe';


class Navbar {
    constructor(){
        this.searchItem = Selector('#searchTerm')
        this.signInButton = Selector('#signin_button')
        this.userIcon = Selector('.icon-user')
        this.logout = Selector('#logout_link')

    }

    async search(text){
        await t
        .typeText(this.searchItem, text, {paste:true, replace:true})
        .pressKey('enter')
        
    }
}

export default Navbar