class LogoutPage {
    assertSuccessfulLogout() {
        cy.get('#content>h1').should('contain', ' Account Logout')
    }

    clickContinueButton() {
        cy.get('#content .buttons>a').click();
    }
}
export default LogoutPage