export class Vacancies {
    get vacancyBtn() { return $$('.button--vacancy')}
    get popUp() { return $('.pop_up--show')}
    get name() { return $('.form-vacancy__inputs [name="name"]')}
    get phone() { return $('.form-vacancy__inputs [name="phone"]')}
    get email() { return $('.form-vacancy__inputs [name="email"]')}
    get href() { return $('.form-vacancy__inputs [name="resume"]')}
    get textArea() { return $('.form-vacancy__inputs [name="message"]')}
    get checkbox() { return $('.form-vacancy__inputs .checkbox__text')}
    get sendBtn() { return $('.pop_up-vacancy__content .button--block')}
    get upload() { return $('[name="file"]')}

    get formVacancyBtn() { return $('.form-vacancy__button')}
    get formCloseBtn() { return $('.pop_up-vacancy__close')}

    async showUploadBtn() {
        await browser.execute(function() {
            var styles = `
            .input-file input { 
                width: 50px !important;
                height: 50px !important;
            }
            `
            var styleSheet = document.createElement("style")
            styleSheet.type = "text/css"
            styleSheet.innerText = styles
            document.head.appendChild(styleSheet)
            }, )
    } 

    async hideUploadBtn() {
        await browser.execute(function() {
            var styles = `
            .input-file input { 
                width: 0px !important;
                height: 0px !important;
            }
            `
            var styleSheet = document.createElement("style")
            styleSheet.type = "text/css"
            styleSheet.innerText = styles
            document.head.appendChild(styleSheet)
            }, )
    }

    async setName(name: string) {
        return await (await this.name).setValue(name)
    }

    async setPhone(phone: string) {
        return await (await this.phone).setValue(phone)
    }

    async setEmail(email: string) {
        return await (await this.email).setValue(email)
    }

    async setTextArea(textArea: string) {
        return await (await this.textArea).setValue(textArea)
    }

    async setHref(href: string) {
        return await (await this.href).setValue(href)
    }
}

export const vacancies = new Vacancies()