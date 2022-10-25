///<reference types="cypress"/>
//імпортнули об'єкт з юзером
import user from '../fixtures/user.json';
//імпортнули функцію
import {
  searchProductWithRecursion
} from '../support/helper'

it('Place order via search', () => {

  cy.setCookie("AC_SF_8CEFDA09D5", user.AC_SF_8CEFDA09D5);

  cy.visit('/');

  cy.get('#filter_keyword')
    .type('i')
    .closest('form')
    .submit();

  searchProductWithRecursion('"Benefit Bella Bamba"');

  cy.get('#product_quantity').clear().type('4');
  cy.get('.productpagecart').click();
  cy.get('#cart_checkout1').click();
  cy.get('#checkout_btn').click();
  cy.get('h1.heading1').should('contain', 'Your Order Has Been Processed!');

  cy.get('.contentpanel')
    .should('contain', 'Thank you for shopping with us!')
    .and('contain', 'Your order ')
    .and('contain', 'has been created!');

})