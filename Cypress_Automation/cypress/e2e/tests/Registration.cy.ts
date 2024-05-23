import AccountPage from "../../pom/AccountPage";
import HomePage from "../../pom/HomePage"
import LogoutPage from "../../pom/LogoutPage";
import RegistrationPage from "../../pom/RegistrationPage";
import SuccessPage from "../../pom/SuccessPage";

const homePage = new HomePage();
const registrationPage = new RegistrationPage();
const successPage = new SuccessPage();
const accountPage = new AccountPage();
const logoutPage = new LogoutPage();

describe("", () => {
    beforeEach(function () {
        cy.openSite();
    })

    it("Register account", () => {
        //a.Click on Shop by Category.
        cy.clickShopByCategory()

        cy.fixture('testParameters').then(parameters => {
            //b. Click on MP3 Player.
            cy.selectCategory(parameters.category.item)

            //c. Hover over the product and click the add to wishlist icon from the icons displayed.
            homePage.hoverOnProduct();
            homePage.clickAddToWishlist()

            //d. Click Register from the pop up displayed
            homePage.clickRegisterButton()

            //e. Fill necessary details
            registrationPage.enterFirstName(parameters.userDetails.firstName)
            registrationPage.enterLastName(parameters.userDetails.lastName);
            registrationPage.enterEmail(parameters.userDetails.firstName + '.' + parameters.userDetails.lastName);
            registrationPage.enterPhoneNumber(parameters.userDetails.phoneNumber);
            registrationPage.enterAndConfirmPassword(parameters.userDetails.password)
        })

        //f. Complete registration
        registrationPage.checkPrivacyPolicy();
        registrationPage.clickContinueButton();

        //Verify account was created successfully
        successPage.assertSuccessfulAccountCreation();
        successPage.clickContinueButton();
        accountPage.assertAccountPage();

        //Log out from account
        accountPage.clickLogoutButton();

        //Verify account logged out successfully
        logoutPage.assertSuccessfulLogout();
        logoutPage.clickContinueButton();

        //Verify that user is returned to Home page
        homePage.assertHomeURL()
    })
})