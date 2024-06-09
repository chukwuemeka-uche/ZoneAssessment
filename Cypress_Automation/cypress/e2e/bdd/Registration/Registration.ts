import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor"
import AccountPage from "../../../pom/AccountPage";
import HomePage from "../../../pom/HomePage"
import LogoutPage from "../../../pom/LogoutPage";
import RegistrationPage from "../../../pom/RegistrationPage";
import SuccessPage from "../../../pom/SuccessPage";
import { testData } from "../../../support/index";

const homePage = new HomePage();
const registrationPage = new RegistrationPage();
const successPage = new SuccessPage();
const accountPage = new AccountPage();
const logoutPage = new LogoutPage();

let userData: testData;
beforeEach(function () {
    cy.fixture('testParameters.json').then((data: testData) => {
        userData = data;
    })
    cy.openSite();
})

Given("a user is on the ecommerce playground", () => {
    homePage.assertEcommercePage();
})

When("the user clicks on Shop by Category", () => {
    cy.clickShopByCategory()
})

When("the user clicks on a Category", () => {
    cy.selectCategory(userData.category.item)
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
    registrationPage.enterFirstName(userData.userDetails.firstName)
    registrationPage.enterLastName(userData.userDetails.lastName);
    registrationPage.enterEmail(userData.userDetails.firstName + '.' + userData.userDetails.lastName);
    registrationPage.enterPhoneNumber(userData.userDetails.phoneNumber);
    registrationPage.enterAndConfirmPassword(userData.userDetails.password)
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
    cy.assertUrlPath(userData.url.homePath)
})
