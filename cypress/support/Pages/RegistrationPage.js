import BasePage from "./BasePage";
import authorizationPage from '../pages/AuthorizationPage';

class RegistrationPage extends BasePage{
    
    visit(){
        cy.log('**Open main page**');
        cy.visit('/');
    }

    getFirstNameField(){
        return cy.get('#AccountFrm_firstname');
    }

    getLastNameField(){
        return cy.get('#AccountFrm_lastname');
    }

    getEmailField(){
        return cy.get('#AccountFrm_email');
    }


    getAdressField(){
        return cy.get('#AccountFrm_address_1');
    }

    getCityField(){
        return cy.get('#AccountFrm_city');
    }

    getZoneField(){
        return cy.get('#AccountFrm_zone_id');
    }

    getPostCodeField(){
        return cy.get('#AccountFrm_postcode');
    }

    getCountryField(){
        return cy.get('#AccountFrm_country_id');
    }

    getLoginNameField(){
        return cy.get('#AccountFrm_loginname');
    }

    getPasswordField(){
        return cy.get('#AccountFrm_password');
    }

    getConfirmPasswordField(){
        return cy.get('#AccountFrm_confirm');
    }

    getNewsLetterOffRadiobtn(){
        return cy.get('#AccountFrm_newsletter0');
    }

    getAgreeCheckbox(){
        return cy.get('#AccountFrm_agree')
    }

    getRegitrationContinueBtn(){
        return cy.get('button[title="Continue"]')
    }

    //дії над елементами
    proceedToRegistration(){
        this.pushLoginRegister()
        authorizationPage.pushContinueBtn()
    }

    submitRegistrationForm(firstName, lastName, email, adress, city, postcode, loginName, password){

        cy.log(`Type FirstName ${firstName} in FirstName field`)
        this.getFirstNameField().type(firstName);

        cy.log(`Type LastName ${lastName} in LastName field`)
        this.getLastNameField().type(lastName);

        cy.log(`Type Email ${email} in Email field`)
        this.getEmailField().type(email);

        cy.log(`Type Adress ${adress} in Adress field`)
        this.getAdressField().type(adress);

        cy.log(`Type City ${city} in City field`)
        this.getCityField().type(city);

        cy.log(`Selecting Zone in Zone field`)
        this.getZoneField().select(1);

        cy.log(`Type Postcode ${postcode} in Postcode field`)
        this.getPostCodeField().type(postcode);

        cy.log(`Selecting Country in Country field`)
        this.getCountryField().select('United Kingdom');

        cy.log(`Type LoginName ${loginName} in LoginName field`)
        this.getLoginNameField().type(loginName);

        cy.log(`Type Password ${password} in Password field`)
        this.getPasswordField().type(password);

        cy.log(`Confirm Password ${password} in confirm Password field`)
        this.getConfirmPasswordField().type(password);

        cy.log(`Choosing Radiobutton`)
        this.getNewsLetterOffRadiobtn().click();

        cy.log(`Adding Checkbox`)
        this.getAgreeCheckbox().check();

        cy.log(`Pushing Continue button to compleete registration`)
        this.getRegitrationContinueBtn().click();

        
    }

   

    
}
export default new RegistrationPage();