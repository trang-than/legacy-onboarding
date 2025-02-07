const { I } = inject();

module.exports = {
  //Locators
  nameSection:
    '//*[@data-component="NameSection"]//*[@data-component="NameHeadingText"]',
  guestBookFormMsg: '//*[@name="_GuestbookForm_Message"]',
  guestBookFormFrom: 'input[name="_GuestbookForm_From"]',
  guestBookFormEmail: 'input[name="_GuestbookForm_Email"]',
  guestBookFormSubmitBtn:
    '//button[text()="Submit Your Message" and @data-component="AffiliateGuestbookSubmitButton"]',
  GuestBookSuccessBox:
    '//*[@data-component="AffiliateGuestbookSuccessBox"]//*[text()="Thank you."]',

  // Methods
  createGuestBookEntry(guestBookFormInfo) {
    I.fillField(this.guestBookFormMsg, guestBookFormInfo.message);
    I.fillField(this.guestBookFormFrom, guestBookFormInfo.from);
    I.fillField(this.guestBookFormEmail, guestBookFormInfo.email);
    I.click(this.guestBookFormSubmitBtn);
  },
};
