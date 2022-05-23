import { Given, When, Then } from "@cucumber/cucumber";
import commonPage from "../pageobjects/common.page";
import homePage from "../pageobjects/home.page";

Given(/^I am on the home page$/, async () => {
  await commonPage.openHomePage();

  await expect(homePage.btn_SignIn).toBeDisplayed();
  await expect(homePage.btn_ContactUs).toBeDisplayed();
  await expect(homePage.img_Logo).toBeDisplayed();
});

When(/^Navigate to SignUp page$/, async () => {
  await homePage.clickOnSignInBtn();
  console.log("-------- Navigating to Authentication page --------");
});
