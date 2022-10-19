import BasePage from "./BasePage";

class AuthorizationPage extends BasePage{
    visit(){
        cy.log('**Open login page**');
        cy.visit('/index.php?rt=account/login');
    }
    //елементи
    getContinueBtn(){
        return cy.get('#accountFrm button');
    }

    getLoginField(){
        return cy.get('#loginFrm_loginname');
    }

    getPasswordField(){
        return cy.get('#loginFrm_password');
    }

    getLoginButton(){
        return cy.get('button[title="Login"]');
    }


    getLoginError(){
        return cy.get('div.alert-danger');
    }
    //дії з елементами
    pushContinueBtn(){
        cy.log('Pushing Continue button on Authorization page')
        this.getContinueBtn().click()
    }

    typeTextInLoginField(userName){
        cy.log(`Type username ${userName} in login field`)
        this.getLoginField().type(userName);
    }

    typeTextInPasswordField(password){
        cy.log(`Type password ${password} in password field`)
        this.getPasswordField().type(password);
    }

    submitLoginForm(userName, password){
        cy.log(`Fill login form`);
        this.getLoginField().type(userName);
        this.getPasswordField().type(password);

        cy.log(`Click login button`);
        this.getLoginButton().click();
    }

    NegativeSubmitLoginForm(userName, password){
        cy.log(`Fill login form with wrong data`);
        this.getLoginField()
        .clear()
        .type(userName);
        this.getPasswordField()
        .clear()
        .type(password);

        cy.log(`Click login button`);
        this.getLoginButton()
        .click();
    }

    
}
export default new AuthorizationPage();