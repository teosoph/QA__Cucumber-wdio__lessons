class AuthPage {
  // ====== Page objects Locators =======
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
  get checkBox_uniformOption() {
    return $("//input[@id='optin']");
  }
  // ===== User address =====
  get input_address_userFirstname() {
    return $("//input[@id='firstname']");
  }
  get input_address_userLastname() {
    return $("//input[@id='lastname']");
  }
  get input_address_userCompany() {
    return $("//input[@id='company']");
  }
  get input_address_userAddress1() {
    return $("//input[@id='address1']");
  }
  get input_address_userAddress2() {
    return $("//input[@id='address2']");
  }
  get input_address_userCity() {
    return $("//input[@id='city']");
  }
  get dropDownMenu_address_userState() {
    return $("//select[@id='id_state']");
  }
  get input_address_userPostcode() {
    return $("//input[@id='postcode']");
  }
  get dropDownMenu_address_userCountry() {
    return $("//select[@id='id_country']");
  }
  get input_userAdditionalInfo() {
    return $("//textarea[@id='other']");
  }
  get input_contacts_userPhone() {
    return $("//input[@id='phone']");
  }
  get input_contacts_userMobilePhone() {
    return $("//input[@id='phone_mobile']");
  }
  get input_userAssignAddressAlias() {
    return $("//input[@id='alias']");
  }
  get btn_register() {
    return $("//span[normalize-space()='Register']");
  }

  // ============= Actions ==============================
  createAccount = async (emailId, addressObj) => {
    await this.input_createAccountEmail.waitForExist({ timeout: 5000 });
    await this.input_createAccountEmail.setValue(emailId);
    await this.btn_createAccount.click();

    const gender1 = await $("//input[@id='id_gender1']");
    await gender1.waitForExist({ timeout: 15000 });
    await this.radioBtn_gender1.click();

    await this.input_userCustomerFirstname.setValue(addressObj.firstname);
    await this.input_userCustomerLastname.setValue(addressObj.lastname);
    await this.input_userEmail.setValue(emailId);
    await this.input_userPassword.setValue("password123");

    // Date of Birth
    await this.dropDownMenu_dateOfBirth_days.selectByIndex(12);
    await this.dropDownMenu_dateOfBirth_months.selectByAttribute("value", "3");
    await this.dropDownMenu_dateOfBirth_years.selectByAttribute("value", "1992");

    await this.checkBox_newsletter.click();
    await this.checkBox_uniformOption.click();

    // User Address
    await this.input_address_userFirstname.setValue(addressObj.firstname);
    await this.input_address_userLastname.setValue(addressObj.lastname);
    await this.input_address_userCompany.setValue(addressObj.company);
    await this.input_address_userAddress1.setValue(addressObj.address1);
    await this.input_address_userAddress2.setValue(addressObj.address2);
    await this.input_address_userCity.setValue("Singapore");
    await this.dropDownMenu_address_userState.selectByIndex(2);
    await this.input_address_userPostalCode.setValue("00000");
    await this.dropDownMenu_address_userCountry.setValue(addressObj.country);
    await this.input_userAdditionalInfo.setValue("This is my additional information");
    await this.input_address_userPhone.setValue("+380677200000");
    await this.input_address_userMobilePhone.setValue("+380444440000");
    await this.input_userAssignAddressAlias.setValue("My address");

    //  Click the "Register" button
    await this.btn_register.click();
  };
}
export default new AuthPage();
