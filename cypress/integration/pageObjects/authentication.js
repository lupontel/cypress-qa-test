/* 
Authentication Page Actions

This file contains the elements/actions of Authentication Page. 
*/

export default class AuthenticationPage {
    getEmail(userEmail){
       cy.get('#mat-input-0').type(userEmail);
    }

    getPassword(userPassword){
        cy.get('#mat-input-1').type(userPassword);
    }

    getLoginButton(){
        cy.contains('button','Log in').click();
    }

    getInvalidEmailMessage(invalidEmailMessage){
         cy.get('#mat-mdc-error-0').contains(invalidEmailMessage);
    }

    getInvalidPasswordMessage(invalidCredentialsMessage){
        cy.get('.mat-mdc-simple-snack-bar')
        cy.contains(invalidCredentialsMessage);
   }
}

