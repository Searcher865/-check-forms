export class Main {
 
    get item3d() { return $$('.main-direction__canvas')}

    get name() { return $('.form-main [name="name"]')}
    get phone() { return $('.form-main [name="phone"]')}
    get email() { return $('.form-main [name="email"]')}
    get btnServices() { return $('.form-main .form-main__select')}
    get listServices() { return $$('.form-main .form-main__select .select__item')}
    get checkbox() { return $('.form-main .checkbox__text')}
    get sendBtn() { return $('.form-main .button--main-form')}
    
    async stopCube() {
        await browser.execute(function() {
            var styles = `
            .h1Container div { 
              animation-duration: 10000000000000000000s !important;
            }
            
            .h2Container div { 
              animation-duration: 10000000000000000000s !important;
            }
            
            .h3Container div { 
              animation-duration: 10000000000000000000s !important;
            }
            `
            var styleSheet = document.createElement("style")
            styleSheet.type = "text/css"
            styleSheet.innerText = styles
            document.head.appendChild(styleSheet)
            }, )
    } 

    async stopClients() {
        await browser.execute(function() {
            var styles = `
            .clients__wrapper{ 
                animation: clients_1 0s infinite linear !important;
            }
            `
            var styleSheet = document.createElement("style")
            styleSheet.type = "text/css"
            styleSheet.innerText = styles
            document.head.appendChild(styleSheet)
            }, )
    } 

    async scrollDown() {
        await browser.execute(function() {
            pageDown(1)
            }, )
    } 

    async scrollUp() {
        await browser.execute(function() {
            pageUp(1)
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
}


//заглушка для pageDown и pageUp, так как TS ругается при компиляции
export const main = new Main()
function pageDown(arg0: number) {
    throw new Error("Function not implemented.")
}

function pageUp(arg0: number) {
    throw new Error("Function not implemented.")
}

