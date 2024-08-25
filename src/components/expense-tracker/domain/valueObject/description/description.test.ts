import { Description } from "./description";

describe("Test Suite - Value Object description", () => {
  test("should defined", () => {
    const description = new Description("Valid description");
    expect(description).toBeDefined();
  });

  test("Should create a valid description", () => {
    const description = new Description("Valid description");
    expect(description.value).toBe("Valid description");
  });

  test("should return error when is value empty", () => {
    const description = "";
    const run = () => new Description(description);
    expect(run).toThrow("Description must be a non-empty string");
  });

  test("should return error when is valuw white", () => {
    const description = "    ";
    const run = () => new Description(description);
    expect(run).toThrow("Description must be a non-empty string");
  });

  test("should error when initial value is not a capital letter", () => {
    const description = "invalid description";
    const run = () => new Description(description);
    expect(run).toThrow("Description mus start with a capital letter");
  });
});
