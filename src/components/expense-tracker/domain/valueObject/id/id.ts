import { IValueObject } from "../../interfaces";

export class ID implements IValueObject<ID, number> {
  value: number;

  constructor(value: number) {
    this.value = value;

    this.validate();
  }

  validate() {
    if (this.value === null || this.value === undefined) {
      throw new Error("ID cannot be null or undefined");
    }

    if (this.value <= 0) {
      throw new Error("ID must be a positive number");
    }

    if (!Number.isInteger(this.value)) {
      throw new Error("ID must be an integer");
    }
  }

  equals(valueObject: ID): boolean {
    return this.value === valueObject.value;
  }
}
