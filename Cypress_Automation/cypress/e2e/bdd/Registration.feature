    Feature: Registration
    A user should be able to registrt on the application
    
    Scenario: Register as a new user
        Given a user is on the ecommerce playground
        When the user clicks on Shop by Category
        And the user clicks on a Category
        And the user hovers on a product
        And the user adds the product to a wishlist
        And the user clicks on Register
        And the user fills the required details
        And the user completes their registration
        Then the system creates the account successfully
