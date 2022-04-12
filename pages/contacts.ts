export class Contacts {
 
    get socialIcon() { return $$('.section-contacts__socials .social ')}
    get name() { return $('#contact-form [name="name"]')}
    get phone() { return $('#contact-form [name="phone"]')}
    get email() { return $('#contact-form [name="email"]')}
    get checkbox() { return $('#contact-form .checkbox__text')}
    get sendBtn() { return $('.section-contacts__item .button--block')}
    
    async setName(name: string) {
        return await (await this.name).setValue(name)
    }

    async setPhone(phone: string) {
        return await (await this.phone).setValue(phone)
    }

    async setEmail(email: string) {
        return await (await this.email).setValue(email)
    }

}

export const contacts = new Contacts()