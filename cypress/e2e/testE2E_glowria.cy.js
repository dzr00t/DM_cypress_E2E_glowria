///<reference types = 'cypress'/>
import { faker } from "@faker-js/faker";
import homepage from "../pages/homepage.page";
import signUp from "../pages/signUp.page";

let newemail = faker.internet.email()
let prenom = faker.person.firstName()
let nom = faker.person.lastName()
let date 
// generer un mdp ac : min 8 caractères,1 caractère en minuscule,1 caractère en majuscule,1 chiffre,1 caractère spécial
let password = faker.internet.password({
    length: 10,
    memorable: false,
    pattern: /[a-z]/
}) + 'A1!'



describe('Test du site web glowria', () => {
    beforeEach('setup', () => {

        //Visiter le site
        cy.visit('https://glowria.com/');
        // ne pas mettre les cookies
        homepage.clicknoCookies()

    });


    it('Creation de compte', () => {
        // creation dun nv compte

        homepage.clickSignUp()
        homepage.saisirEmail(newemail)
        homepage.clickSubmit()
        //assertion du bon url pour le remplissage des champs du compte
        cy.url().should('include', '/signup');
        // remplir les champs pour le nv compte
        signUp.saisirPrenom(prenom)
        signUp.saisirNom(nom)
        signUp.confirmerEmail(newemail)
        signUp.saisirPassword(password)
        // assertion de l exigence du mdp 
        signUp.getmdpValid().should('be.visible')
        signUp.saisirBirthday(date)


    });

});