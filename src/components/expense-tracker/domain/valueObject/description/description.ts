import { IValueObject } from "../../interfaces";

export class Description implements IValueObject<Description, string> {
  description: string;
  value: string;

  constructor(description: string) {
    this.description = description;
    this.validate();
    this.value = this.description;
  }

  validate() {
    if (this.description.trim() === "") {
      throw new Error("Description must be a non-empty string");
    }

    if (this.description.charAt(0) !== this.description.charAt(0).toUpperCase()) {
      throw new Error("Description mus start with a capital letter");
    }
  }

  equals(valueObject: Description): boolean {
    return this.value === valueObject.value;
  }
}
