const { I, obituaryPage } = inject();

Given("I want to leave a Guest Book message to a Person", async function () {
  await I.connectDBConnection();
  let persons = await I.getJanusPersonRecord();
  this.selectedPerson = persons[0];
});

When("I go to Obituary page of that person", async function () {
  I.amOnPage(
    `/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=${this.selectedPerson["PersonId"]}`
  );
});

Then("I see the correct person name", async function () {
  I.seeElement(obituaryPage.nameSection);
});

Then("I scroll down to Guest Book section", async () => {
  I.scrollTo(obituaryPage.guestBookFormMsg);
});

Then("I create a Guest Book entry", async () => {
  let guestBookForm = {
    message: "This is a test entry.",
    from: "AZ friend",
    email: "az@email.com",
  };
  obituaryPage.createGuestBookEntry(guestBookForm);
});

Then("I see that message is recorded", async () => {
  I.waitForVisible(obituaryPage.GuestBookSuccessBox);
  I.seeElement(obituaryPage.GuestBookSuccessBox);
});

After(async function () {
  await I.closeDBConnection();
});
