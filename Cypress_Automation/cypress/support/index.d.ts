export { };
declare global {
    namespace Cypress {
        interface Chainable {
            //   login(email: string, password: string): Chainable<void>
            //   drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
            //   dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
            //   visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
            openSite(): Chainable<void>
            clickShopByCategory(): Chainable<void>
            selectCategory(category: string): Chainable<void>
        }
    }
}

//This interface allows Cypres pick data from the fixture file
export interface testData{
    "category": {
        "item": string
    },
    "userDetails": {
        "firstName": string,
        "lastName": string,
        "phoneNumber": string,
        "password": string
    }
}