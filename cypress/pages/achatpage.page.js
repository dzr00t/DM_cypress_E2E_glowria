///<reference types = 'cypress'/>

class achatpage {
    // attribut (element de la page)
    elements = {

        btn_jecraque: () => cy.get('a[data-id="50"]'),



    }

    //methode 

    clickJeCraque() {
        this.elements.btn_jecraque().click()
    }






}

export default new achatpage()