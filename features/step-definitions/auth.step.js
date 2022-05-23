import { Given, When, Then } from "@cucumber/cucumber";
import faker from "faker";
import authPage from "../pageobjects/auth.page";

Then(/^Create an account with random username$/, async () => {
  console.log("-------- Account creation --------");

  // Ramdom email
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
  // await browser.pause(10000);
});

// Given(/^Login using newly created credentials$/, async () => {
//   console.log("-------- Login --------");
//   await authPage.signIn(global.ShareVariables.email);
// });
