import { IValueObject } from "../../interfaces";

export class Amount implements IValueObject<Amount, number> {
  private readonly amount: number;
  value: number;

  constructor(amount: number) {
    this.amount = amount;
    this.validate();
    this.value = this.amount;
  }

  validate() {
    if (this.amount === null || this.amount === undefined) {
      throw new Error("Amount cannot be null or undefined");
    }

    if (this.amount <= 0) {
      throw new Error("Amount must be a positive number");
    }

    if (!Number.isInteger(this.amount)) {
      throw new Error("Amount must be an integer");
    }
  }

  equals(valueObject: Amount): boolean {
    return this.value === valueObject.value;
  }
}
