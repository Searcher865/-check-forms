import { DataForForms } from "../../model/dataForForms";
import { contacts } from "../../pages/contacts";
import { header } from "../../pages/header";
import { main } from "../../pages/main";
import { vacancies } from "../../pages/vacancies";
import { baseConfig } from "../baseConfig";

const fs = require('fs').promises;
const path = require('path');
const expectChai = require('chai').expect;
const uniqid = require('uniqid');

  describe('Проверка отправки форм', async () => {

    it('Отправка формы из шапки "Оставить заявку"', async () => {
      const formData: DataForForms = {
        name: "Тест формы из шапки "+ await uniqid(),
        phone: "89501112233",
        email: "test@test.ru",
        service: "SMM"
      }
      await (await fs).writeFile('././json/formDataHeader.json', JSON.stringify(formData, null, 2), (err) => {
      if (err) throw err;
      })

      await browser.url('')

      await (await header.menu).waitForClickable({ timeout: 10000 })
      await (await header.menu).click()
      await (await header.btnFeedback).waitForClickable({ timeout: 10000 })
      await (await header.btnFeedback).click()
      await header.setName(formData.name)
      await header.setPhone(formData.phone)
      await header.setEmail(formData.email)
      await header.setServices(formData.service)
      // await (await header.getSendBtn()).click()
    });

    it('Отправка формы с главной страницы последнего экрана', async () => {
      const formData = {
        name: "Тест формы с главной страницы последнего экрана "+ await uniqid(),
        phone: "89501112233",
        email: "test@test.ru",
        service: "Консультация"
      }
      await (await fs).writeFile('././json/formDataMain.json', JSON.stringify(formData, null, 2), (err) => {
      if (err) throw err;
      })

      await browser.url('')

      for (let i = 0; i < 6; i++) {
        await main.scrollDown()
        await browser.pause(1000)
      }

      await main.setName(formData.name)
      await main.setPhone(formData.phone)
      await main.setEmail(formData.email)
      await main.setServices(formData.service)
      // await (await main.sendBtn).click()
      
    });

    it('Отправка формы со страницы "Контакты"', async () => {
      const formData = {
        name: "Тест формы со страницы Контакты "+ await uniqid(),
        phone: "89501112233",
        email: "test@test.ru"
      }

      await (await fs).writeFile('././json/formDataContact.json', JSON.stringify(formData, null, 2), (err) => {
        if (err) throw err;
        })

      await browser.url(''+baseConfig.urlContacts)

      await contacts.setName(formData.name)
      await contacts.setPhone(formData.phone)
      await contacts.setEmail(formData.email)
      // await (await contacts.sendBtn).click()
      
    });

    it('Отправка формы со страницы "Вакансии"', async () => {
      await browser.url(''+baseConfig.urlVacancies);
      const formData = {
        item: "Контекстолог / Директолог",
        textarea: "textarea",
        name: "Тест формы со страницы вакансий "+ await uniqid(),
        phone: "89501112233",
        email: "test@test.ru",
        href: "test href",
      }
      await (await fs).writeFile('././json/formDataVacancies.json', JSON.stringify(formData, null, 2), (err) => {
        if (err) throw err;
      })

      await browser.url(''+baseConfig.urlVacancies)
      
      await (await vacancies.vacancyBtn)[0].click()
      const filePath = await path.join(__dirname, '../test file/chrome.png');
      await vacancies.showUploadBtn()
      await (await vacancies.upload).setValue(await filePath);
      await vacancies.hideUploadBtn()
      await vacancies.setName(formData.name)
      await vacancies.setPhone(formData.phone)
      await vacancies.setEmail(formData.email)
      await vacancies.setHref(formData.href)
      await vacancies.setTextArea(formData.textarea)
      // await (await vacancies.sendBtn).click()
      
    });
 
});

