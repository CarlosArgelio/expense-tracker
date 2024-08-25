import { IValueObject } from "../../interfaces";

export class ID implements IValueObject<ID, number> {
  private readonly id: number;
  value: number;

  constructor(id: number) {
    this.id = id;
    this.validate();
    this.value = this.id;
  }

  validate() {
    if (this.id === null || this.id === undefined) {
      throw new Error("ID cannot be null or undefined");
    }

    if (this.id <= 0) {
      throw new Error("ID must be a positive number");
    }

    if (!Number.isInteger(this.id)) {
      throw new Error("ID must be an integer");
    }
  }

  equals(valueObject: ID): boolean {
    return this.value === valueObject.value;
  }
}
