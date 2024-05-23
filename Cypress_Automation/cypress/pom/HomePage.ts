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

    assertHomeURL()
    {
        cy.url().should('eq','https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
    }
}
export default HomePage