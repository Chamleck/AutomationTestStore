///<reference types="cypress"/>
import authorizationPage from '../support/pages/AuthorizationPage';
import accountPage from '../support/pages/AccountPage';
import user from '../fixtures/user.json';

const params = [
  {login: 'Alda.Effertz',  
   password:'12345qwerty',
  },

  {login: '12345qwerty', 
   password:'Alda.Effertz'
  }
]

it('Authorization', () => {
  authorizationPage.visit();

  authorizationPage.submitLoginForm(user.userName, user.password);

  accountPage.getUserNameFromHeading().should('contain', user.firstName).and('contain', "My Account");

  cy.getCookie('AC_SF_8CEFDA09D5').should('exist');

})

//before(() => {
  //it('Opening Authorization page',()=>{
  //  authorizationPage.visit().wait(4000);
 // })
  
//})

params.forEach(({login, password }) =>{
  it(`Adding wrong login ${login} , adding wrong ${password} to login & password fields`, () => {
    authorizationPage.visit()
    authorizationPage.NegativeSubmitLoginForm(login , password);
    authorizationPage.getLoginError()
    .should('contain', 'Error: Incorrect login or password provided.');
})
})

it.skip('Negative authorization', () => {
  authorizationPage.visit();

  authorizationPage.NegativeSubmitLoginForm('Alda.Effertz', '12345qwerty');

  authorizationPage.getLoginError()
  .should('contain', 'Error: Incorrect login or password provided.');


})

it('Test inheritance', () => {
  authorizationPage.visit();

  authorizationPage.performSearch('i');
})