import { IValueObject } from "../../interfaces";

export class CreationDate implements IValueObject<CreationDate, string> {
  private readonly date: Date;
  value: string;

  constructor(date: Date) {
    this.date = date;

    const year = this.date.getFullYear();
    const month = String(this.date.getMonth() + 1).padStart(2, "0"); // Meses van de 0-11
    const day = String(this.date.getDate()).padStart(2, "0");

    const isoDate = `${year}-${month}-${day}`;
    this.value = isoDate;
  }
  equals(valueObject: CreationDate): boolean {
    return this.value === valueObject.value;
  }
}
