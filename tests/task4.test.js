Feature("Task 4 - Check API Status Code");

//  DATATABLE
let persons = new DataTable(["testId", "personName", "personId", "statusCode"]);
persons.add(["TC01", "virginia-gruchalski", "196167379", 200]);
persons.add(["TC02", "dummyName", "dummyId", 404]);

Data(persons).Scenario("Task 4 - Check Status Code", async ({ I, current }) => {
  //  TEST DATA
  let testUrl = `/us/obituaries/chicagotribune/name/${current.personName}-obituary?pid=${current.personId}`;

  //STEPS
  I.sendGetRequest(testUrl).then((response) => {
    I.assertEqual(response.status, current.statusCode);
  });
});
