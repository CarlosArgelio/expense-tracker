import { Amount, CreationDate, Description, ID } from "../../valueObject";

export interface IExpense {
  id: ID;
  description: Description;
  amount: Amount;
  date: CreationDate;
}
export type ICreateExpense = Pick<IExpense, "description" | "amount">;
export type IUpdateExpense = Partial<Pick<IExpense, "description" | "amount">>;
