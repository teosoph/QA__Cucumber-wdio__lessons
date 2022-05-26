import { Given, When, Then } from "@cucumber/cucumber";
import myAccount from "../pageobjects/myaccount.page";

// ============== TC-002 Sign In with newly created user credentials
Given(/^I shall verify the address information in my addresses section$/, async () => {
  await myAccount.navigateToAddress();
});
