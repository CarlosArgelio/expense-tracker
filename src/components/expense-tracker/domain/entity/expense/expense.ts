import { ID, Description, Amount, CreationDate } from "../../valueObject";

export class Expense {
  constructor(
    public id: ID,
    public description: Description,
    public amount: Amount,
    public date: CreationDate,
  ) {}
}
