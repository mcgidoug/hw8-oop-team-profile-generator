const manager = require("../lib/manager");

describe("manager", () => {
  describe("Initialization", () => {
    it("should set the values of name, id and email, when i set them.", () => {
      // arrange
      let name = "Reniel";
      let id = 1;
      let email = "Reniel@gmail.com";
      // act
      let manager = new manager(name, id, email);
      // assert
      expect(manager.name).toEqual("Reniel");
      expect(manager.id).toEqual(1);
      expect(manager.email).toEqual("Reniel@gmail.com");
    });
  });
  describe("getRole", () => {
    it("should return manager when getRole is called", () => {
      // arrange
      let name = "Reniel";
      let id = 1;
      let email = "Reniel@gmail.com";
      // act
      let manager = new manager(name, id, email);
      // assert
      expect(role).toEqual("manager");
    });
  });
});
