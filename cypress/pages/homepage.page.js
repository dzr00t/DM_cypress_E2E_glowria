///<reference types = 'cypress'/>

class homepage {
    // attribut (element de la page)

    elements = {

        icon_signup: () => cy.get('a[aria-label="account"]'),
        newEmail: () => cy.get("#newEmail"),
        btn_inscription: () => cy.get('input[type="submit"][value="Inscription"]'),
        cookies: () => cy.get('#axeptio_main_button'),
        no_cookies: () => cy.get('#axeptio_btn_dismiss'),
        btn_lacheter: () => cy.get("a[href*='personal/presentation/glowria']").contains("L'ACHETER"),
        // login
        email: () => cy.get("#email"),
        password: () => cy.get("#password"),
        btn_connection: () => cy.get('input[type="submit"][value="Se connecter"]'),



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
    clickbtn_lacheter() {
        this.elements.btn_lacheter().click({ force: true })
    }


    seConnecter(email, password) {
        this.clickSignUp()
        this.elements.email().type(email, { force: true })
        this.elements.password().type(password, { force: true })
        this.elements.btn_connection().click()

    }





}

export default new homepage()