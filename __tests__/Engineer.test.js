const engineer = require("../lib/engineer");

describe("engineer", () => {
  // arrange
  let name = "Reniel";
  let id = 1;
  let email = "Reniel@gmail.com";
  // act
  let engineer = new Engineer(name, id, email);
  describe("Initialization", () => {
    it("should set the values of name, id and email, when i set them.", () => {
      expect(engineer.name).toEqual("Reniel");
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual("Reniel@gmail.com");
    });
  });
  describe("getName", () => {
    it("should return engineer name when getName is called", () => {
      expect(engineer.getName()).toEqual("Reniel");
    });
  });
  describe("getId", () => {
    it("should return engineer id when getId is called", () => {
      expect(engineer.getId()).toEqual(1);
    });
  });
  describe("getEmail", () => {
    it("should return engineer email when getEmail is called", () => {
      expect(engineer.getEmail()).toEqual("Reniel@gmail.com");
    });
  });
  describe("getRole", () => {
    it("should return engineer role when getRole is called", () => {
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
