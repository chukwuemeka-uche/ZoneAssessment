/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('openSite',()=>{
    cy.visit("/")
    cy.clearAllSessionStorage({ log: true })
})

Cypress.Commands.add('clickShopByCategory', () => {
    cy.get('[data-id="217832"]>a').click({ force: true });
    cy.get('[data-position="left"]>h5').should('be.visible')
})

Cypress.Commands.add('selectCategory', (category) => {
    cy.get('[data-id="217841"]>nav li>a').each($el => {
        if ($el.text().includes(category)) {
            cy.wrap($el).click();
        }
    })
})

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })