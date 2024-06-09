class HomePage {
    hoverOnProduct() {
        cy.get('[data-view_id="grid"] .image').eq(0).trigger('mouseover');
    }

    clickAddToWishlist() {
        cy.get('.product-action>button[data-wishlist]').eq(0).click({ force: true })
    }

    clickRegisterButton() {
        cy.get('#notification-box-top .col:nth-child(2)').click()
    }

    //Doing this on first landing
    assertEcommercePage() {
        cy.location('host').should('eq', 'ecommerce-playground.lambdatest.io')
    }

    //This URL is after successful log out
    assertHome() {
        cy.location('pathname').should('eq', '/index.php');
    }
}
export default HomePage