export default class BasePage {
    getSearchField(){
        return cy.get('#filter_keyword');
    }

    getLoginRegisterBtn(){
        return cy.get('#customer_menu_top');
    }

    performSearch(searchQuery){
        cy.log(`**Perform search with search query ${searchQuery}**`)
        this.getSearchField().type(searchQuery);
    }

    pushLoginRegister(){
        cy.log(`**Pushing Login or Register**`)
        this.getLoginRegisterBtn().click();
    }
}