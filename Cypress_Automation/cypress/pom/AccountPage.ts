class AccountPage {
    assertAccountPage()
    {
        cy.get('.card:nth-child(1) .card-header').should('be.visible')
    }

    clickLogoutButton() {
        cy.get('.list-group-item').each(($el,index) => {
            if ($el.text().includes("Logout")) {
                cy.wrap($el).click()
            }
        })
    }
}
export default AccountPage