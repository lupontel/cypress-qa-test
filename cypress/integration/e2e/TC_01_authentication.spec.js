/// <reference types="cypress" />

describe('AuthenticationTests', function()
{
    beforeEach(function(){
        //before each test the app will be launch
        cy.fixture('authenticationData').then((data) => {
            this.data = data;
            })
        
        cy.visit('http://app.tpro.rocks/authentication');       
   
    });

//Checking if the an registed user is able to login in the app and see the "/tasks/live" page
it('As an user I would like to login in the App', function(){
    cy.log("Authentication Page");
    cy.login(this.data.email,this.data.password); 
    cy.logout();
})

//Task 3: Checking the error messages and validations for Email and Password.
it('As an user I would like to see an error message for invalid credentials , ', function(){
    cy.invalidEmail(this.data.invalidEmailMessage); 
    cy.invalidCredentials(this.data.email,this.data.invalidCredentialsMessage); 
})

})