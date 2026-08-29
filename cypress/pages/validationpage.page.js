///<reference types = 'cypress'/>

class validationpage {
    // attribut (element de la page)
    elements = {

        CGV: () => cy.get('#terms'),
        payer: () => cy.get('#submit-validation-form')


    }

    //methode 

    check_CGV(adresse) {
        this.elements.CGV().check()
    }
    clickPayer(adresse) {
        this.elements.payer().click()
    }



}

export default new validationpage()