import { Given, When, Then } from "@cucumber/cucumber";
import faker from "faker";

import homePage from "../pageobjects/home.page";
import authPage from "../pageobjects/auth.page";

// ======== TC-001 Create a new user/SignUp =========
Then(/^Create an account with random username$/, async () => {
  console.log("-------- Account creation --------");

  // Random email
  const randomStr = Math.random().toString(36).substr(2, 5);
  const emailId = `myemail_${randomStr}@gmail.com`;

  // Address
  const addressObj = {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    company: faker.company.companyName(),
    address1: faker.address.streetAddress(),
    address2: faker.random.alphaNumeric(5),
  };

  global.ShareVariables.email = emailId;
  global.ShareVariables.address = addressObj;

  await authPage.createAccount(emailId, addressObj);
});

// ============== TC-002 Sign In with newly created user credentials
Given(/^I am on the Sign In page$/, async () => {
  if (await homePage.btn_SignOut.isExisting()) {
    await homePage.clickOnSignOutBtn();
  }

  await expect(homePage.img_Logo).toBeExisting();
  await expect(homePage.btn_ContactUs).toBeExisting();
  await expect(homePage.btn_SignIn).toBeExisting();

  await homePage.clickOnSignInBtn();
});

Then(/^Login using newly created credentials$/, async () => {
  console.log("-------- Login --------");
  await authPage.signIn(global.ShareVariables.email);
});
