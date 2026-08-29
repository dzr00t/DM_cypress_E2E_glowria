///<reference types = 'cypress'/>

class orderpage {
    // attribut (element de la page)
    elements = {

        adresse: () => cy.get('#user_input_autocomplete_address'),
        suggestions_liste: () => cy.get('.pac-container .pac-item'),
        phonenumber: () => cy.get('#subscription_deliveryContact_phoneNumber'),
        valider: () => cy.get('#submit-creation-form'),



    }

    //methode 

    saisirAdresse(adresse) {
        this.elements.adresse().type(adresse, { force: true })
        this.elements.suggestions_liste().first().click()
    }
    saisirPhoneNumber(phone) {
        this.elements.phonenumber().type(phone, { force: true })

    }
    clickValider() {
        this.elements.valider().click()
    }


}

export default new orderpage()