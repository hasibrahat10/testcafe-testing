import {Selector, t} from 'testcafe'

class SearchResutPage{
    constructor(){
        this.searchResult = Selector('h2')
        this.linkText = Selector('div')
    }
}

export default SearchResutPage