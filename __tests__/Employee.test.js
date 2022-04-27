const Employee = require("../lib/Employee");

describe("Employee", () => {
  // arrange
  let name = "Reniel";
  let id = 1;
  let email = "Reniel@gmail.com";
  // act
  let employee = new Employee(name, id, email);
  describe("Initialization", () => {
    it("should set the values of name, id and email, when i set them.", () => {
      expect(employee.name).toEqual("Reniel");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("Reniel@gmail.com");
    });
  });
  describe("getName", () => {
    it("should return Employee name when getName is called", () => {
      expect(employee.getName()).toEqual("Reniel");
    });
  });
  describe("getId", () => {
    it("should return Employee id when getId is called", () => {
      expect(employee.getId()).toEqual(1);
    });
  });
  describe("getEmail", () => {
    it("should return Employee email when getEmail is called", () => {
      expect(employee.getEmail()).toEqual("Reniel@gmail.com");
    });
  });
  describe("getRole", () => {
    it("should return Employee role when getRole is called", () => {
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
