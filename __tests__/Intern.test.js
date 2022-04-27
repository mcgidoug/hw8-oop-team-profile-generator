const intern = require("../lib/intern");

describe("intern", () => {
  // arrange
  let name = "Reniel";
  let id = 1;
  let email = "Reniel@gmail.com";
  // act
  let intern = new Intern(name, id, email);
  describe("Initialization", () => {
    it("should set the values of name, id and email, when i set them.", () => {
      expect(intern.name).toEqual("Reniel");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("Reniel@gmail.com");
    });
  });
  describe("getName", () => {
    it("should return intern name when getName is called", () => {
      expect(intern.getName()).toEqual("Reniel");
    });
  });
  describe("getId", () => {
    it("should return intern id when getId is called", () => {
      expect(intern.getId()).toEqual(1);
    });
  });
  describe("getEmail", () => {
    it("should return intern email when getEmail is called", () => {
      expect(intern.getEmail()).toEqual("Reniel@gmail.com");
    });
  });
  describe("getRole", () => {
    it("should return intern role when getRole is called", () => {
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
