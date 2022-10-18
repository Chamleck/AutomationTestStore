///<reference types="cypress"/>
//import authorizationPage from '../support/pages/AuthorizationPage';
import accountPage from '../support/pages/AccountPage';
import {faker} from '@faker-js/faker';
import registrationPage from '../support/pages/RegistrationPage' ;

let user = {
    firstName: faker.name.firstName(),
    lastName:faker.name.lastName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    postcode: faker.address.zipCode(),
    userName: faker.internet.userName(),
    password: faker.internet.password(15)
  }

it('Registration with faker.js and page object method', () => {
    registrationPage.visit();
    registrationPage.proceedToRegistration();
    registrationPage.submitRegistrationForm(user.firstName, user.lastName, user.email, user.address, user.city, user.postcode, user.userName, user.password);
    accountPage.getUserNameFromHeading().should('contain', ' Your Account Has Been Created!');

  });