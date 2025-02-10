Feature("Task 2 - Guest Book Entry");

/*
The test should be contained entirely within this file. It should:
1.Open the page above
2.Assert that the decedent's first name appears in the Name section
3.Scroll down until the Guest Book is visible
4.Leave a Guest Book entry (it will not appear after you submit, as it has gone into a review queue)
*/

Scenario("Task 2 - Leave a Guest Book entry", async ({ I, obituaryPage }) => {
  //TEST DATA
  let testData = {
    url: "/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379",
    decedentName: "Virginia Grace Gruchalski",
    guestBookForm: {
      message: "This is a test entry.",
      from: "AZ friend",
      email: "az@email.com",
    },
  };

  //STEPS
  I.amOnPage(testData.url);
  I.seeElement(obituaryPage.nameSection);
  let name = await I.grabTextFrom(obituaryPage.nameSection);
  I.assertEqual(name, testData.decedentName);
  I.scrollTo(obituaryPage.guestBookFormMsg);
  obituaryPage.createGuestBookEntry(testData.guestBookForm);
  I.seeElement(obituaryPage.GuestBookSuccessBox);
});
