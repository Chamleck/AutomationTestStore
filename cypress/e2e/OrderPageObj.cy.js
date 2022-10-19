///<reference types="cypress"/>
import authorizationPage from '../support/pages/AuthorizationPage';
import accountPage from '../support/pages/AccountPage';
import user from '../fixtures/user.json';
import orderPage from '../support/pages/OrderPage';
//import {searchExistingProduct} from '../support/helper'



  it('Place order', () => {

    authorizationPage.visit();
    authorizationPage.submitLoginForm(user.userName, user.password);
    accountPage.getUserNameFromHeading().should('contain', user.firstName).and('contain', "My Account");
  
     orderPage.visitSpecificProduct();
     orderPage.submitOrder(2)
     accountPage.getUserNameFromHeading()
     .should('contain', 'Your Order Has Been Processed!');

     orderPage.getContentpanel()
     .should('contain', 'Thank you for shopping with us!')
     .and('contain', 'Your order ')
     .and('contain', 'has been created!');
  })

  it('Place order with help of search', () => {

    authorizationPage.visit();
    authorizationPage.submitLoginForm(user.userName, user.password);
    accountPage.getUserNameFromHeading().should('contain', user.firstName).and('contain', "My Account");
  
     
     orderPage.submitSearchOrder(2, 'Benefit Bella Bamba')
     accountPage.getUserNameFromHeading()
     .should('contain', 'Your Order Has Been Processed!');

     orderPage.getContentpanel()
     .should('contain', 'Thank you for shopping with us!')
     .and('contain', 'Your order ')
     .and('contain', 'has been created!');
  })
