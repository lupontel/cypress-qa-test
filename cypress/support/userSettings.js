/// <reference types="cypress"/>

import UserSettings from "../integration/pageObjects/userSettings";
import PasswordPage from "../integration/pageObjects/passwordPage";
import AuthenticationPage from "../integration/pageObjects/authentication";


Cypress.Commands.add("logout", () => {
    const userSetting = new UserSettings();
    cy.wait(2000)    
    userSetting.getUserProfile();
    userSetting.getLogout();
    
});

/*
Perfoming the steps to change the password and after checking 
if the user is not able to log in with the "old Password". 
*/
Cypress.Commands.add("updatePassword",(userPassword, newPassword, userEmail, invalidCredentialsMessage) => {
    const userSetting = new UserSettings();
    const passPage = new PasswordPage();
    const authPage = new AuthenticationPage();

    cy.fixture('authenticationData').then((data)=>{
        cy.wait(4000)
          
        userSetting.getUserProfile();
        cy.wait(2000);
        userSetting.getEditAccount();
        cy.wait(2000);
        userSetting.getPasswordMenu();
        cy.wait(2000);
        passPage.getCurrentPassword(userPassword);
        passPage.getNewPassword(newPassword);
        passPage.getVerifyPassword(newPassword);
        passPage.getUpdatebtn();
        passPage.getUserUpdatedMessage();     
    })
});


