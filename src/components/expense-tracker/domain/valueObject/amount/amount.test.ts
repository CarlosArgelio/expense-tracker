import { Amount } from "./amount";

describe("Test Suite - Value Object Amount", () => {
  test("should defined", () => {
    expect(Amount).toBeDefined();
  });

  test("should create a new Amount", () => {
    const amount = new Amount(1);
    expect(amount.value).toBe(1);
  });

  test("should return error when is a negative number", () => {
    const amount = -1;

    const run = () => {
      new Amount(amount);
    };

    expect(run).toThrow("Amount must be a positive number");
  });

  test("should return error when is zero number", () => {
    const amount = 0;

    const run = () => {
      new Amount(amount);
    };

    expect(run).toThrow("Amount must be a positive number");
  });

  test("should return error when value is not number", () => {
    const amount = "a";

    const run = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      new Amount(amount);
    };

    expect(run).toThrow("Amount must be an integer");
  });

  test("should return error when value is null", () => {
    const amount = null;

    const run = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      new Amount(amount);
    };

    expect(run).toThrow("Amount cannot be null or undefined");
  });

  test("should return error when value is undefined", () => {
    const amount = undefined;

    const run = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      new Amount(amount);
    };

    expect(run).toThrow("Amount cannot be null or undefined");
  });
});
