Feature("Task 1 - Guest Book Entry");

/*
The test should be contained entirely within this file. It should:
1.Open the page above
2.Assert that the decedent's first name appears in the Name section
3.Scroll down until the Guest Book is visible
4.Leave a Guest Book entry (it will not appear after you submit, as it has gone into a review queue)
*/

Scenario("Task 1 - Leave a Guest Book entry", async ({ I }) => {
  //LOCATORS
  let locator = {
    nameSection:
      '//*[@data-component="NameSection"]//*[@data-component="NameHeadingText"]',
    guestBookFormMsg: '//*[@name="_GuestbookForm_Message"]',
    guestBookFormFrom: 'input[name="_GuestbookForm_From"]',
    guestBookFormEmail: 'input[name="_GuestbookForm_Email"]',
    guestBookFormSubmitBtn:
      '//button[text()="Submit Your Message" and @data-component="AffiliateGuestbookSubmitButton"]',
    GuestBookSuccessBox:
      '//*[@data-component="AffiliateGuestbookSuccessBox"]//*[text()="Thank you."]',
  };

  //TEST DATA
  let testData = {
    url: "/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379",
    decedentName: "Virginia Grace Gruchalski",
    guestBookMsg: "This is a test entry.",
    guestBookFrom: "AZ friend",
    guestBookEmail: "az@email.com",
  };

  //STEPS
  I.amOnPage(testData.url);
  I.seeElement(locator.nameSection);
  let name = await I.grabTextFrom(locator.nameSection);
  I.assertEqual(name, testData.decedentName);
  I.scrollTo(locator.guestBookFormMsg);
  I.fillField(locator.guestBookFormMsg, testData.guestBookMsg);
  I.fillField(locator.guestBookFormFrom, testData.guestBookFrom);
  I.fillField(locator.guestBookFormEmail, testData.guestBookEmail);
  I.click(locator.guestBookFormSubmitBtn);
  I.waitForVisible(locator.GuestBookSuccessBox);
  I.seeElement(locator.GuestBookSuccessBox);
})
  .tag("@janus_beta")
  .tag("@webdriver_ui");
