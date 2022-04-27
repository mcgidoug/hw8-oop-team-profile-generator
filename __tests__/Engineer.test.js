const engineer = require("../lib/engineer");

describe("engineer", () => {
  describe("Initialization", () => {
    it("should set the values of name, id and email, when i set them.", () => {
      // arrange
      let name = "Reniel";
      let id = 1;
      let email = "Reniel@gmail.com";
      // act
      let engineer = new engineer(name, id, email);
      // assert
      expect(engineer.name).toEqual("Reniel");
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual("Reniel@gmail.com");
    });
  });
  describe("getRole", () => {
    it("should return engineer when getRole is called", () => {
      // arrange
      let name = "Reniel";
      let id = 1;
      let email = "Reniel@gmail.com";
      // act
      let engineer = new engineer(name, id, email);
      // assert
      expect(role).toEqual("engineer");
    });
  });
});
