import { ID } from "./id";

describe("Test Suite - Value Object ID", () => {
  test("should defined", () => {
    expect(ID).toBeDefined();
  });

  test("should create a new ID", () => {
    const id = new ID(1);
    expect(id.value).toBe(1);
  });

  test("should return error when is a negative number", () => {
    const id = -1;

    const run = () => {
      new ID(id);
    };

    expect(run).toThrow("ID must be a positive number");
  });

  test("should return error when is zero number", () => {
    const id = 0;

    const run = () => {
      new ID(id);
    };

    expect(run).toThrow("ID must be a positive number");
  });

  test("should return error when value is not number", () => {
    const id = "a";

    const run = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      new ID(id);
    };

    expect(run).toThrow("ID must be an integer");
  });

  test("should return error when value is null", () => {
    const id = null;

    const run = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      new ID(id);
    };

    expect(run).toThrow("ID cannot be null or undefined");
  });

  test("should return error when value is undefined", () => {
    const id = undefined;

    const run = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      new ID(id);
    };

    expect(run).toThrow("ID cannot be null or undefined");
  });
});
