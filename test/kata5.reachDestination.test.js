const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toEqual("I should be there in 4.5 hours.");
    expect(reachDestination(61, 8)).toEqual("I should be there in 7.5 hours.");
    expect(reachDestination(75, 21)).toEqual("I should be there in 3.5 hours.");
  });
});
