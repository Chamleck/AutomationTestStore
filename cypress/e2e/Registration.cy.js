describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/')

    cy.get('#customer_menu_top').click();
    cy.get('#accountFrm button').click();
    cy.get('#AccountFrm_firstname').type('firstname');
    cy.get('#AccountFrm_lastname').type('lastname');
    cy.get('#AccountFrm_email').type('cock');
    cy.get('#AccountFrm_adress_1').type('adress');
    cy.get('#AccountFrm_city').type('Odessa');
    cy.get('#AccountFrm_zone_id').select(1);
    cy.get('#AccountFrm_postcode').type('123124');
    cy.get('#AccountFrm_country_id').select('United Kingdom');
    cy.get('#AccountFrm_loginname').type('userkok');
    cy.get('#AccountFrm_password').type('122345qwerty');
    cy.get('#AccountFrm_confirm').type('122345qwerty');
    cy.get('#AccountFrm_newsletter0').click();
    cy.get('#AccountFrm_password');
    cy.get('#AccountFrm_agree').check();
    cy.get('button[title="Continue"]').click();

    cy.get('h1.heading1').should('contain', 'Your Account Has Been Created!')
  })
})