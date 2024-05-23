import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor"
import AccountPage from "../../../pom/AccountPage";
import HomePage from "../../../pom/HomePage"
import LogoutPage from "../../../pom/LogoutPage";
import RegistrationPage from "../../../pom/RegistrationPage";
import SuccessPage from "../../../pom/SuccessPage";

const homePage = new HomePage();
const registrationPage = new RegistrationPage();
const successPage = new SuccessPage();
const accountPage = new AccountPage();
const logoutPage = new LogoutPage();

Given("a user is on the ecommerce playground", () => {
    cy.openSite();
})

When("the user clicks on Shop by Category", () => {
    cy.clickShopByCategory()
})

When("the user clicks on a Category", () => {
    cy.selectCategory(" MP3 Players")
})

When("the user hovers on a product", () => {
    homePage.hoverOnProduct();
})

When("the user adds the product to a wishlist", () => {
    homePage.clickAddToWishlist()
})

When("the user clicks on Register", () => {
    homePage.clickRegisterButton()
})
When("the user fills the required details", () => {
    registrationPage.enterFirstName("Test")
    registrationPage.enterLastName("User");
    registrationPage.enterEmail("Test" + '.' + "User");
    registrationPage.enterPhoneNumber("803075244");
    registrationPage.enterAndConfirmPassword("Pa33w0rd!")
})

When("the user completes their registration", () => {
    registrationPage.checkPrivacyPolicy();
    registrationPage.clickContinueButton();
})

Then("the system creates the account successfully", () => {
    successPage.assertSuccessfulAccountCreation();
    successPage.clickContinueButton();
    accountPage.assertAccountPage();
})

afterEach('the user logs out from the account', () => {
    accountPage.clickLogoutButton();
    logoutPage.assertSuccessfulLogout();
    logoutPage.clickContinueButton();
    homePage.assertHomeURL()
})
