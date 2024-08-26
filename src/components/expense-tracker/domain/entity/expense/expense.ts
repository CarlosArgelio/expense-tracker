import { IExpense } from "../../interfaces/entity/IExpense";
import { ID, Description, Amount, CreationDate } from "../../valueObject";

export class Expense implements IExpense {
  constructor(
    public id: ID,
    public description: Description,
    public amount: Amount,
    public date: CreationDate,
  ) {}
}
