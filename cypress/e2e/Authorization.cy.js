///<reference types="cypress"/>
//імпортуємо об'єкт з джейсон файлу у папці фікстюрес
import user from '../fixtures/user.json';





it('Authorization', () => {
  cy.visit('/index.php?rt=account/login');
//юзер це назва об'єкту через крапку звертаєиось до влістивості об'єкту (user.userName)
  cy.get('#loginFrm_loginname').type(user.userName);
  cy.get('#loginFrm_password').type(user.password)

  cy.get('button[title="Login"]').click();
  cy.get('h1.heading1')
  .should('contain', user.firstName)
  .and('contain', "My Account");
  cy.getCookie('AC_SF_8CEFDA09D5').should('exist')
})



it('Authorization negative case', () => {
  cy.visit('/index.php?rt=account/login');

  cy.get('#loginFrm_loginname').type('Alda.Effertz');
  cy.get('#loginFrm_password').type('12345qwerty')

  cy.get('button[title="Login"]').click();
  cy.get('div.alert-danger')
  .should('contain', 'Error: Incorrect login or password provided.')
  
})