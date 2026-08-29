///<reference types = 'cypress'/>
import { faker, fakerFR } from "@faker-js/faker";
import homepage from "../pages/homepage.page";
import signUp from "../pages/signUp.page";
import achatpage from "../pages/achatpage.page";
import orderpage from "../pages/orderpage.page";
import validationpage from "../pages/validationpage.page";

let newemail = faker.internet.email()
let prenom = faker.person.firstName()
let nom = faker.person.lastName()
let date = signUp.getRandomBirthDateFaker()
let adresse = fakerFR.location.streetAddress()
let phone = fakerFR.phone.number({ style: 'mobile' })


// generer un mdp ac : min 8 caractères,1 caractère en minuscule,1 caractère en majuscule,1 chiffre,1 caractère spécial
let password = faker.internet.password({ length: 10, memorable: false, pattern: /[a-z]/ }) + 'A1!'



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
        //remplissage des champs
        signUp.saisirBirthday(date)
        signUp.checknewsletterBox()
        signUp.checkpartenerBox()
        signUp.checklegalmentionsBox()
        signUp.clicksubmitBtn()
        // assertion du bon url 
        cy.url().should('eql', 'https://glowria.com/');

    });


    it('Se connecter et Choisir un produit ', () => {

        homepage.seConnecter(newemail, password)
        homepage.clickbtn_lacheter()
        // assertion du bon url
        cy.url().should('include', '/personal/presentation/glowria');
        achatpage.clickJeCraque()
        cy.url().should('include', '/order/personal/creation/');
        orderpage.saisirAdresse(adresse)
        orderpage.saisirPhoneNumber(phone)
        orderpage.clickValider()
        // verifier la validation 
        cy.url().should('include', '/validation');
        validationpage.check_CGV()
        validationpage.clickPayer()
        // assertion qd l environemment change
        cy.origin('https://secure.payzen.eu', () => {
            cy.url().should('include', '/vads-payment/')
        })

    });

});



//fonction
