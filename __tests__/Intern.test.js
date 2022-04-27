const intern = require("../lib/intern");

describe("intern", () => {
  describe("Initialization", () => {
    it("should set the values of name, id and email, when i set them.", () => {
      // arrange
      let name = "Reniel";
      let id = 1;
      let email = "Reniel@gmail.com";
      // act
      let intern = new intern(name, id, email);
      // assert
      expect(intern.name).toEqual("Reniel");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("Reniel@gmail.com");
    });
  });
  describe("getRole", () => {
    it("should return intern when getRole is called", () => {
      // arrange
      let name = "Reniel";
      let id = 1;
      let email = "Reniel@gmail.com";
      // act
      let intern = new intern(name, id, email);
      // assert
      expect(role).toEqual("intern");
    });
  });
});
