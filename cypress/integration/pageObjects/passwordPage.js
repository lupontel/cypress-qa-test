/* 
Password Page Actions

This file contains the elements/actions of Password Page. 
*/

export default class PasswordPage {
    getCurrentPassword(userPassword){
        cy.get('#mat-input-19').type(userPassword);
     }

     getNewPassword(newPassword){
        cy.get('#mat-input-17').type(newPassword);
     }

     getVerifyPassword(newPassword){
        cy.get('#mat-input-18').type(newPassword);
     }

     getUpdatebtn(){
        cy.contains('button','Update').click();
       
     }

     getUserUpdatedMessage(){
        cy.get('.mat-mdc-simple-snack-bar')
        cy.contains("User updated");
   }

}

