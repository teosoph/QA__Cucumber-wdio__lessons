class AuthPage {
  // Page objects Locators

  get input_createAccountEmail() {
    return $("//input[@id='email_create']");
  }
  get btn_createAccount() {
    return $("//span[normalize-space()='Create an account']");
  }

  //  ===== User personal information ====
  get radioBtn_gender1() {
    return $("//input[@id='id_gender1']");
  }
  get input_userCustomerFirstname() {
    return $("//input[@id='customer_firstname']");
  }
  get input_userCustomerLastname() {
    return $("//input[@id='customer_lastname']");
  }
  get input_userEmail() {
    return $("//input[@id='email']");
  }
  get input_userPassword() {
    return $("//input[@id='passwd']");
  }
  get dropDownMenu_dateOfBirth_days() {
    return $("//select[@id='days']");
  }
  get dropDownMenu_dateOfBirth_months() {
    return $("//select[@id='months']");
  }
  get dropDownMenu_dateOfBirth_years() {
    return $("//select[@id='years']");
  }
  get checkBox_newsletter() {
    return $("//input[@id='newsletter']");
  }
  get checkBox_optin() {
    return $("//input[@id='optin']");
  }
  // ===== User address
  get input_userFirstname() {
    return $("//input[@id='firstname']");
  }
  get input_userLastname() {
    return $("//input[@id='lastname']");
  }
  get input_userCompany() {
    return $("//input[@id='company']");
  }
  get input_userAddress1() {
    return $("//input[@id='address1']");
  }
  get input_userAddress2() {
    return $("//input[@id='address2']");
  }
  get input_userCity() {
    return $("//input[@id='city']");
  }
  get dropDownMenu_userState() {
    return $("//select[@id='id_state']");
  }
  get input_userPostcode() {
    return $("//input[@id='postcode']");
  }
  get dropDownMenu_userCountry() {
    return $("//select[@id='id_country']");
  }
  get input_userAdditionalInfo() {
    return $("//textarea[@id='other']");
  }
  get input_userPhone() {
    return $("//input[@id='phone']");
  }
  get input_userMobilePhone() {
    return $("//input[@id='phone_mobile']");
  }
  get input_userAssignAddressAlias() {
    return $("//input[@id='alias']");
  }
  get btn_register() {
    return $("//span[normalize-space()='Register']");
  }

  // Actions
  createAccount = async (emailId, address) => {
    await this.input_createAccountEmail.waitForExist({ timeout: 5000 });
    await this.input_createAccountEmail.setValue(emailId);
    await this.btn_createAccount.click();

    const gender1 = await $("//input[@id='id_gender1']");
    await gender1.waitForExist({ timeout: 15000 });
    await this.radioBtn_gender1.click();

    await this.input_userCustomerFirstname.setValue(address.firstname);
    await this.input_userCustomerLastname.setValue(address.lastname);
    await this.input_userEmail.setValue(emailId);
    await this.input_userPassword.setValue("password123");

    // Date of Birth
    await this.dropDownMenu_dateOfBirth_days.selectByIndex(12);
    await this.dropDownMenu_dateOfBirth_months.selectByAttribute("value", "3");
    await this.dropDownMenu_dateOfBirth_years.selectByAttribute("value", "1992");
  };
}
export default new AuthPage();
