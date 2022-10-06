export function searchExistingProduct(productName){
    cy.get('#fileter_keyword').type(productName)
    .closest('form')
    .submit();

    cy.get('h1.productname').should('contain', productName)
}