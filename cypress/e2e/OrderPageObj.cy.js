///<reference types="cypress"/>
import authorizationPage from '../support/pages/AuthorizationPage';
import accountPage from '../support/pages/AccountPage';
import user from '../fixtures/user.json';
import order from '../support/pages/Order';
//import {searchExistingProduct} from '../support/helper'



  it('Place order', () => {

    authorizationPage.visit();
    authorizationPage.submitLoginForm(user.userName, user.password);
    accountPage.getUserNameFromHeading().should('contain', user.firstName).and('contain', "My Account");
  
     cy.visit('https://automationteststore.com/index.php?rt=product/product&product_id=52');
     order.submitOrder(2)
     accountPage.getUserNameFromHeading()
     .should('contain', 'Your Order Has Been Processed!');

     order.getContentpanel()
     .should('contain', 'Thank you for shopping with us!')
     .and('contain', 'Your order ')
     .and('contain', 'has been created!');
  })

  it('Place order with help of search', () => {

    authorizationPage.visit();
    authorizationPage.submitLoginForm(user.userName, user.password);
    accountPage.getUserNameFromHeading().should('contain', user.firstName).and('contain', "My Account");
  
     
     order.submitSearchOrder(2, 'Benefit Bella Bamba')
     accountPage.getUserNameFromHeading()
     .should('contain', 'Your Order Has Been Processed!');

     order.getContentpanel()
     .should('contain', 'Thank you for shopping with us!')
     .and('contain', 'Your order ')
     .and('contain', 'has been created!');
  })