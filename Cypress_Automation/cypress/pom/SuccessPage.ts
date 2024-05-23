class SuccessPage {
    assertSuccessfulAccountCreation() {
        cy.get('#content>h1').should('contain', ' Your Account Has Been Created!')
    }

    clickContinueButton() {
        cy.get('#content .buttons>a').click();
    }
}
export default SuccessPage