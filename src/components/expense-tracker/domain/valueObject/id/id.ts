import { IValueObject } from "../../interfaces";

export class ID implements IValueObject<ID, number> {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  equals(valueObject: ID): boolean {
    console.log("🚀 ~ ID ~ equals ~ valueObject:", valueObject);
    throw new Error("Method not implemented.");
  }
}
