const manager = require("../lib/manager");

describe("manager", () => {
  // arrange
  let name = "Reniel";
  let id = 1;
  let email = "Reniel@gmail.com";
  // act
  let manager = new Manager(name, id, email);
  describe("Initialization", () => {
    it("should set the values of name, id and email, when i set them.", () => {
      expect(manager.name).toEqual("Reniel");
      expect(manager.id).toEqual(1);
      expect(manager.email).toEqual("Reniel@gmail.com");
    });
  });
  describe("getName", () => {
    it("should return manager name when getName is called", () => {
      expect(manager.getName()).toEqual("Reniel");
    });
  });
  describe("getId", () => {
    it("should return manager id when getId is called", () => {
      expect(manager.getId()).toEqual(1);
    });
  });
  describe("getEmail", () => {
    it("should return manager email when getEmail is called", () => {
      expect(manager.getEmail()).toEqual("Reniel@gmail.com");
    });
  });
  describe("getRole", () => {
    it("should return manager role when getRole is called", () => {
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
