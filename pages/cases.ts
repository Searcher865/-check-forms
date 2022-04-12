export class Cases {
 
    get cards() { return $$('.cases__item a')}
    get caseTitle() { return $$('.case__title')}
    get tabsCategory() { return $$('.filter__item a')}

    async getHref() {
        let spisok = [];
        interface caseItem {
            title: string;
            url: string;
        }
        for (let i: number = 0; i<(await cases.cards).length; i++) {
            let href = await (await this.cards[i]).getAttribute("href")
          
            let caseItem: caseItem = {
                title: await (await this.caseTitle)[i].getText(),
                url: (await href.split(".ru"))[1]
            }
            await spisok.push(caseItem)
            
        }
        
        return spisok
    } 
}

export const cases = new Cases()