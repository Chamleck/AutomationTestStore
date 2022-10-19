import BasePage from "./BasePage";
import {searchExistingProduct} from '../helper'


class Order extends BasePage{
    
    visit(){
        cy.log('**Open main page**');
        cy.visit('/');
    }

    visitSpecificProduct(){
        cy.log('**Open page of specific product**');
        cy.visit('https://automationteststore.com/index.php?rt=product/product&product_id=52');
    }

    getProductQuantity(){
        return cy.get('#product_quantity');
    }

    getCartBtn(){
        return cy.get('.productpagecart');
    }

    getCartCheckoutBtn(){
        return cy.get('#cart_checkout1');
    }


    getConfirmOrderBtn(){
        return cy.get('#checkout_btn');
    }

    getContentpanel(){
        return cy.get('.contentpanel');
    }


    //дії над елементами
    
    submitOrder(Quantity){

        cy.log(`Selecting Quantity ${Quantity} `)
        this.getProductQuantity()
        .clear()
        .type(Quantity);

        cy.log(`Going to cart`)
        this.getCartBtn()
        .click();

        cy.log(`Checkout the cart`)
        this.getCartCheckoutBtn()
        .click();

        cy.log(`Confirmation of order`)
        this.getConfirmOrderBtn().click();
        
    }

    submitSearchOrder(Quantity,ProductName){
        cy.log(`Entering ProductName ${ProductName} `)
        searchExistingProduct(ProductName);

        cy.log(`Selecting Quantity ${Quantity} `)
        this.getProductQuantity()
        .clear()
        .type(Quantity);

        cy.log(`Going to cart`)
        this.getCartBtn()
        .click();

        cy.log(`Checkout the cart`)
        this.getCartCheckoutBtn()
        .click();

        cy.log(`Confirmation of order`)
        this.getConfirmOrderBtn().click();
        
    }

   

    
}
export default new Order();