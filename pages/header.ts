export class Header {
 
    get menu() { return $('.hamburger__bg')}
    get btnFeedback() { return $('.button--pink')}
    get name() { return $('.pop_up-form__content [name="name"]')}
    get phone() { return $('.pop_up-form__content [name="phone"]')}
    get email() { return $('.pop_up-form__content [name="email"]')}
    get btnServices() { return $('.pop_up-form__content .form-main__select')}
    get listServices() { return $$('.pop_up-form__content .form-main__select .select__item')}
    get sendBtn() { return $$('[type="submit"]')}
    get checkbox() { return $$('.pop_up-form__content .checkbox__text')}

    async setName(name: string) {
        return await (await this.name).setValue(name)
    }

    async setPhone(phone: string) {
        return await (await this.phone).setValue(phone)
    }

    async setEmail(email: string) {
        return await (await this.email).setValue(email)
    }

    async setServices(services: string) {
        await (await this.btnServices).click()
        await (await this.listServices)[1].waitForClickable({ timeout: 5000 });
        const listServices = await this.listServices
        for (let i: number = 0; i<(listServices.length); i++) {
            if (await (await listServices)[i].getText() === services) {
                await (await listServices)[i].click()
              }
          }
    }

    async getSendBtn() {
        return (await this.sendBtn)[1]
    }

}

export const header = new Header()