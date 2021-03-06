/* eslint-disable no-undef */
const helpers = require("../views/helpers");

describe("Test the titlecase function", () => {
  test("It should output a string with the first letter upper case", () => {
    const actual = helpers.titlecase("this is our test");
    const expected = "This Is Our Test";
    expect(actual).toBe(expected);
  });
});
