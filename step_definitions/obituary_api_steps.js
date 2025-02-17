const { I } = inject();
// Add in your custom step files

Given("I have an Obituary endpoint {string}", async function (testEndpoint) {
  this.endpoint = testEndpoint;
});

When(
  "I send a GET Obituary request with Person Id is {string} and Person Name is {string}",
  async function (personId, personName) {
    const testUrl = this.endpoint
      .replace(/{[^}]+}/, personName)
      .replace(/{[^}]+}/, personId);
    const response = await I.sendGetRequest(testUrl);
    this.statusCode = response.status;
  }
);

Then("I receive Response Status Code as {int}", async function (statusCode) {
  I.assertEqual(statusCode, this.statusCode);
});
