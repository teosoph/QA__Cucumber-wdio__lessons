class CommonPage {
  openHomePage() {
    browser.url("http://automationpractice.com/index.php");
    console.log("------- Navigating to URL http://automationpractice.com/ ------");

    const browserTitle = browser.getTitle();

    //   Assert
  }

  //   verifyPageHeading = async () => {};
}
export default new CommonPage();
