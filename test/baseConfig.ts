export class BaseConfig {

    get urlCases() { return "/cases/"} 
    get urlAbout() { return "/about"} 
    get urlVacancies() { return "/vacancies"} 
    get urlContacts() { return "/contacts/"} 
    get urlBlog() { return "/articles/"} 
    get urlServices() { return "/services/"} 
    
}

export const baseConfig = new BaseConfig()
