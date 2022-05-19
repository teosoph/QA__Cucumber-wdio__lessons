import { Given, When, Then } from "@cucumber/cucumber";
import commonPage from "../pageobjects/common.page";
import homePage from "../pageobjects/home.page";

Given(/^I am on the home page$/, async () => {
  commonPage.openHomePage();

  await expect(homePage.btn_SignIn).toBePresent();
  await expect(homePage.btn_ContactUs).toBePresent();
  await expect(homePage.img_Logo).toBePresent();
});

When(/^Navigate to SignUp page$/, async () => {
  homePage.clickOnSignInBtn();
  console.log("-------- Navigating to Authentication page --------");
});
