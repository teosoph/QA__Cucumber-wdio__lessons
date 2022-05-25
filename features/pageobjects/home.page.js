class HomePage {
  // =============== WebElement Locators ==================
  get img_Logo() {
    return $("//img[@alt='My Store']");
  }
  get btn_ContactUs() {
    return $("//a[@title='Contact Us']");
  }
  get btn_SignIn() {
    return $("//a[@title='Log in to your customer account']");
  }
  get btn_SignOut() {
    return $("//a[@title='Log me out']");
  }

  // ====================  Actions ===================
  async clickOnSignInBtn() {
    await this.btn_SignIn.click();
    console.log("---- Sign In button is clicked ----");
  }

  // ====== SignOut action ========
  clickOnSignOutBtn = async () => {
    await this.btn_SignOut.click();
    console.log("============== Logout success !!! ==============");
  };
}

export default new HomePage();
