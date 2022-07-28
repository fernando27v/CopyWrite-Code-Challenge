const request = require("supertest")(
  "https://copywrite-challenge-fernando.herokuapp.com"
);
const expect = require("chai").expect;

describe("GET /iecho", function () {
  it("returns a text inverted and a flag in true if the text is a palindrome.", function () {
    return request.get("/iecho?text=kayak").then((response) => {
      expect(response.status).to.eql(200);
      expect(response._body.text).to.eql("kayak");
      expect(response._body.palindrome).to.eql(true);
    });
  });
  it("returns a text inverted and a flag in false if the text is not a palindrome.", function () {
    return request.get("/iecho?text=test").then((response) => {
      expect(response.status).to.eql(200);
      expect(response._body.text).to.eql("tset");
      expect(response._body.palindrome).to.eql(false);
    });
  });
  it("returns a status code 400 and a error message if is don't send anything on the query.", function () {
    return request.get("/iecho?text=").then((response) => {
      expect(response.status).to.eql(400);
      expect(response._body.error).to.eql("No text");
    });
  });
});
