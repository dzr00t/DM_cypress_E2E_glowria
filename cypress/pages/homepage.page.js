///<reference types = 'cypress'/>

class homepage {
    // 
    elements = {

        icon_signup: () => cy.get('a[aria-label="account"]'),
        newEmail: () => cy.get("#newEmail"),
        btn_inscription: () => cy.get('input[type="submit"][value="Inscription"]'),
        cookies: () => cy.get('#axeptio_main_button'),
        no_cookies: () => cy.get('#axeptio_btn_dismiss'),




    }

    //methode 

    clickSignUp() {
        this.elements.icon_signup().click()
    }
    saisirEmail(newemail) {
        this.elements.newEmail().type(newemail, { force: true })
    }
    clickSubmit() {
        this.elements.btn_inscription().click()
    }
    clicknoCookies() {
        this.elements.cookies().should('be.visible').click({ force: true })
        this.elements.no_cookies().should('be.visible').click({ force: true })

    }




}

export default new homepage()