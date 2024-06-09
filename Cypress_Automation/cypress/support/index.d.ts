export { };
declare global {
    namespace Cypress {
        interface Chainable {
            openSite(): Chainable<void>
            clickShopByCategory(): Chainable<void>
            selectCategory(category: string): Chainable<void>
            assertUrlPath(path: string): Chainable<void>
        }
    }
}

//This interface allows Cypress pick data from the fixture file
export interface testData {
    "category": {
        "item": string
    },
    "userDetails": {
        "firstName": string,
        "lastName": string,
        "phoneNumber": string,
        "password": string
    },
    "url":{
        "homePath": string
    }
}