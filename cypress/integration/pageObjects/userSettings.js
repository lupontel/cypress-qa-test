/* 
User Settings Page

This file contains the elements/actions of Authentication Page. 

*/

export default class UserSettings {
    getUserProfile(){
        cy.contains('button','Test Quality').click();
    }

    getEditAccount(){
        cy.contains('button','Edit account ').click();
    }    

    getPasswordMenu(){
        cy.contains('Password').click();
    }

    getLogout(){
        cy.contains('Log out').click();        
    }

}

