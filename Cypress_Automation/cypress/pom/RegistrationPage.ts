class RegistrationPage {
    enterFirstName(firstName: string) {
        cy.get('#input-firstname').clear().type(firstName);
    }

    enterLastName(lastName: string) {
        cy.get('#input-lastname').clear().type(lastName)
    }

    enterEmail(emailAddress: string) {
        //Random number to append to email to enable multiple runs
        const id: string = (Math.floor(Math.random() * (300 - 1)) + 1).toString();
        cy.get('#input-email').clear().type(emailAddress + id + "@maildrop.cc")
    }

    enterPhoneNumber(phoneNumber: string) {
        cy.get('#input-telephone').clear().type("+234" + phoneNumber)
    }

    enterAndConfirmPassword(password: string) {
        cy.get('#input-password').clear().type(password)
        cy.get('#input-confirm').clear().type(password)
    }

    checkPrivacyPolicy() {
        cy.get('#input-agree').check({ force: true });
    }

    clickContinueButton() {
        cy.get('input[value="Continue"]').click()
    }

}
export default RegistrationPage