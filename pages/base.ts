export class Bases {
 
    get cards() { return $$('.cases__item')}


    async getScrollHeight() {
        return await browser.execute(function() {
            return document.body.scrollHeight
        })
    } 

    async getPageHeight() {
        return await browser.execute(function() {
            return window.innerHeight+window.pageYOffset
        })
    } 

    async scrollTo(scrollHeight: number) {
       return await browser.execute(function(scrollHeight) {
        return window.scrollTo(0, scrollHeight);
        }, scrollHeight)
    } 

    async scrollFullPage() {
        while ( await this.getScrollHeight() > await this.getPageHeight()) {
            await this.scrollTo(await this.getScrollHeight())
            await browser.pause(3000)
        }
        await browser.execute(function() {
            return window.scrollTo(0, 0);
            })
    } 

   
    
}

export const bases = new Bases()