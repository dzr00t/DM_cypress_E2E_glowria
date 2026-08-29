///<reference types = 'cypress'/>

class signup {
    // 
    elements = {

        prenom: () => cy.get('#customer_firstName'),
        nom: () => cy.get("#customer_lastName"),
        confirm_email: () => cy.get('#customer_emailConfirm'),
        password: () => cy.get('#customer_password'),
        jauge_valid: () => cy.get('.jauge.valid'),
        date_birth: () => cy.get('#customer_birthday'),
        newsletterBox: () => cy.get('#customer_subscribeNewsletter'),
        partenerBox: () => cy.get('#customer_optinPartnerNewsletter'),
        legalmentionsBox: () => cy.get('#legalmentions'),
        submitBtn: () => cy.get('#submitBtn')




    }

    //methode 


    saisirPrenom(prenom) {
        this.elements.prenom().type(prenom, { force: true })
    }
    saisirNom(nom) {
        this.elements.nom().type(nom, { force: true })
    }
    confirmerEmail(email) {
        this.elements.confirm_email().type(email, { force: true })
    }
    saisirPassword(mdp) {
        this.elements.password().type(mdp, { force: true })
    }
    getmdpValid() {
        return this.elements.jauge_valid()
    }

    saisirBirthday(date) {
        this.elements.date_birth().type(date, { force: true })
    }
    checknewsletterBox() {
        this.elements.newsletterBox().check({ force: true })
    }
    checkpartenerBox() {
        this.elements.partenerBox().check({ force: true })
    }
    checklegalmentionsBox() {
        this.elements.legalmentionsBox().check({ force: true })
    }
    clicksubmitBtn() {
        this.elements.submitBtn().click()
    }






}

export default new signup()