/// <reference types="cypress" />

describe('UserSettings', function()
{
    beforeEach(function(){

        cy.fixture('authenticationData').then((data) => {
            this.data = data;
            })

        cy.visit('http://app.tpro.rocks/authentication');       
   
    });

    afterEach(function() {
        // after each test the user will be logged out.
        cy.logout();
     }) 
    
//Checking if a logged user is able to change the password
it('As a logged user I would like to change my password', function(){
    cy.login(this.data.email,this.data.password);
    cy.updatePassword(this.data.password,this.data.newPassword,this.data.newPassword);   
})

//Checking if the new password is working properly. 
it('As an user I would like to login with my New Password', function(){
    cy.login(this.data.email,this.data.newPassword);      
})

/*To keep the data integrity I decided to change the password to the initial one by e2e, instead of  
generete a mock password and managing it throught a json file.
*/
it('As an user I would like to reset my password to the previous one', function(){
    cy.login(this.data.email,this.data.newPassword);
    cy.updatePassword(this.data.newPassword,this.data.password,this.data.password);     
})

it('As an user I would like to see an error message when passwords do not mach', function(){
    cy.login(this.data.email,this.data.password);
    cy.updatePasswordNotMatch(this.data.password,this.data.newPassword,this.data.diffPassword);     
})

})