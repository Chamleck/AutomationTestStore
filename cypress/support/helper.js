export function searchExistingProduct(productName){
    cy.get('#filter_keyword').type(productName)
    .closest('form')
    .submit();
    
    cy.get('h1.productname').should('contain', productName)
};




//export function searchProductWithI(productName){
  //  let pageNumber = 2;
 //   const search = () => {
   //     cy.get('#filter_keyword').type('i')
   //         .closest('form')
    //        .submit();
    //    const result = cy.get('h1.productname').should('contain', productName);
     //   if(!result){
      //      ++pageNumber;
        //    cy.get('a[href="https://automationteststore.com/index.php?rt=product/search&amp;keyword=i&amp;category_id=0&amp;sort=date_modified-ASC&amp;limit=50&amp;page=${pageNumber}"]')
        //        .click()
         //   search();
        //}
   // }
   // search();
//}






//export function searchProductWithI(productName){
   //let pageNumber = 2;
    //const search = () => {
       // cy.get('#filter_keyword').type('i')
          //  .closest('form')
          // .submit();
           // var title = Boolean (`[title= ${productName}]`)(false)
          //  cy.get('a.prdocutname').find('[title]')
       // if(cy.get('a.prdocutname').find(`[title= ${productName}]`)){
          // cy.get('a.prdocutname').find(`[title= ${productName}]`)
           // .click()
       // }
        //else{
           // ++pageNumber;
         //   cy.get(`a[href="https://automationteststore.com/index.php?rt=product/search&amp;keyword=i&amp;category_id=0&amp;sort=date_modified-ASC&amp;limit=50&amp;page=${pageNumber}"]`)
         //       .click()
       //     search();
       // }
   // }
    //search();
//}




