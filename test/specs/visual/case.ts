import { bases } from "../../../pages/base";
import { cases } from "../../../pages/cases";
import { baseConfig } from "../../baseConfig";

const fs = require('fs').promises;
const path = require('path');
const expectChai = require('chai').expect;


describe('Визуальный тест по всем кейсам', async () => {

  before(async () => {
    await browser.url('' + baseConfig.urlCases)
    await browser.setWindowSize(1920, 1080)
    await bases.scrollFullPage()
  });

    it('Сбор ссылок на кейсы', async () => {
      await (await fs).writeFile('./././json/casesArray.json', JSON.stringify((await cases.getHref()), null, 2), (err) => {
        if (err) throw err;
      });
      let casesArray = await JSON.parse(await  fs.readFile('./././json/casesArray.json', function (err) {
        if (err) throw err;
      }))
      let casesSum = await (await casesArray).length

      await expectChai(await casesSum).to.equal(24, "количество кейсов изменилось") 

      for (let i = 0; i < casesSum; i++) {

        describe('Визуальный тест каждой страницы кейса', async () => {

          before(async () => {
            await browser.url('' + casesArray[i].url);
            await browser.setWindowSize(1920, 1080);
          });

          it('кейса '+casesArray[i].title+' без шапки', async () => {
            const header = await $('header');
            await expectChai(await browser.checkFullPageScreen('case/'+casesArray[i].title, {hideElements:[header]})).to.be.closeTo(0, 0, 'не соответствует эталону');
          });

        });

      } 
    });

});