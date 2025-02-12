Feature("Task 3 - Connect DB");

BeforeSuite(async ({ I }) => {
  console.log("Before test");
  await I.connectDBConnection();
});

AfterSuite(async ({ I }) => {
  console.log("After test");
  await I.closeDBConnection();
});

Scenario("Task 3 - Connect DB", async ({ I, obituaryPage }) => {
  //  TEST DATA
  let testData = {
    personUrl:
      "/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=",
    guestBookForm: {
      message: "This is a test entry.",
      from: "AZ friend",
      email: "az@email.com",
    },
  };

  //DB TEST DATA
  let selectedPerson = (await I.getJanusPersonRecord())[0];

  //STEPS
  I.amOnPage(testData.personUrl + selectedPerson["PersonId"]);
  I.seeElement(obituaryPage.nameSection);
  let actualName = await I.grabTextFrom(obituaryPage.nameSection);
  let expectedName =
    selectedPerson["FirstName"] +
    " " +
    selectedPerson["MiddleName"] +
    " " +
    selectedPerson["LastName"];
  I.assertEqual(actualName, expectedName);
  I.scrollTo(obituaryPage.guestBookFormMsg);
  obituaryPage.createGuestBookEntry(testData.guestBookForm);
  I.waitForVisible(obituaryPage.GuestBookSuccessBox);
  I.seeElement(obituaryPage.GuestBookSuccessBox);
});
