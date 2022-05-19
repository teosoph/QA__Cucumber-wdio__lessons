class HomePage {
  // WebElement Locators
  get btn_SignIn() {
    return $("//a[@title='Log in to your customer account']");
  }

  get btn_ContactUs() {
    return $("//a[@title='Contact Us']");
  }

  get img_Logo() {
    return $("//img[@alt='My Store']");
  }

  //   Actions
  async clickOnSignInBtn() {
    await this.btn_SignIn.click();
    console.log("---- Sign In button is clicked ----");
  }
}

export default new HomePage();
