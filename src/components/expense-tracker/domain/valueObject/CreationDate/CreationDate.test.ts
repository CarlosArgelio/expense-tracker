import { CreationDate } from "./CreationDate";

describe("Test Suite - Value Object Creation Date", () => {
  test("should defined", () => {
    expect(CreationDate).toBeDefined();
  });

  test("should return valid date", () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Meses van de 0-11
    const day = String(date.getDate()).padStart(2, "0");
    const isoDate = `${year}-${month}-${day}`;

    const creationDate = new CreationDate(date);

    expect(creationDate.value).toEqual(isoDate);
  });
});
