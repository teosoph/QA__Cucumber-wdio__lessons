class MyAccount {
  // ======== My account page locators
  get btn_OrderHistory() {
    return $("//span[normalize-space()='Order history and details']");
  }
  get btn_MyCreditSlips() {
    return $("//span[normalize-space()='My credit slips']");
  }
  get btn_MyAddresses() {
    return $("//span[normalize-space()='My addresses']");
  }
  get btn_MyPersonalInfo() {
    return $("//span[normalize-space()='My personal information']");
  }
  get btn_MyWishlists() {
    return $("//span[normalize-space()='My wishlists']");
  }

  // ======== My addresses page locators
  get title_MyAddressesPage() {
    return $("//h1[@class='page-heading']");
  }
  get txt_AddressName() {
    return $("div[class='addresses'] li:nth-child(2) span:nth-child(1)");
  }
  get txt_AddressCompany() {
    return $("//span[@class='address_company']");
  }
  get txt_Address1() {
    return $("//span[@class='address_address1']");
  }
  get txt_Address2() {
    return $(".address_address2");
  }
  // ===== Actions ======
  navigateToAddress = async () => {
    await this.btn_MyAddresses.click();

    await browser.pause(24000);
  };
}
export default new MyAccount();
