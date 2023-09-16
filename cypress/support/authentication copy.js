/// <reference types="cypress"/>

import AuthenticationPage from "../integration/pageObjects/authentication";


//Checking if a valid user is able to login and see the "tasks/live" page.
Cypress.Commands.add("login",(userEmail,password) => {

    const authPage = new AuthenticationPage();

    cy.fixture('authenticationData').then((data)=>{
        cy.wait(2000)
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/authentication')          
          })        
        authPage.getEmail(userEmail);
        authPage.getPassword(password);
        authPage.getLoginButton();               
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/tasks/live')          
          })
    })
});


//Checking invalid message for Email field.
Cypress.Commands.add("invalidEmail",(invalidEmailMessage) => {

    const authPage = new AuthenticationPage();

    cy.fixture('authenticationData').then((data)=>{
        cy.wait(2000)
        
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/authentication')          
          })
        authPage.getEmail("test234565");
        authPage.getLoginButton();         
        authPage.getInvalidEmailMessage(invalidEmailMessage);
        cy.reload();        
    })
});

//Checking invalid message for Password field.
Cypress.Commands.add("invalidCredentials",(userEmail,invalidCredentialsMessage) => {

    const authPage = new AuthenticationPage();

    cy.fixture('authenticationData').then((data)=>{
        cy.wait(2000)
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/authentication')          
          })
        authPage.getEmail(userEmail);
        authPage.getPassword("test123@");        
        authPage.getPassword("\n\n\n\n");
        authPage.getLoginButton();        
        authPage.getInvalidPasswordMessage(invalidCredentialsMessage);
        cy.reload(); 
    })
});

