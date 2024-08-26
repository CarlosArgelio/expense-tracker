import { IExpense, ICreateExpense, IUpdateExpense } from "../entity";

export interface IExpenseTrackerDAO {
  addExpense(expense: ICreateExpense): IExpense;
  getExpenses(): IExpense[] | null;
  getExpense(id: IExpense["id"]): IExpense | null;
  updateExpense(id: IExpense["id"], changes: IUpdateExpense): IExpense;
  deleteExpense(id: IExpense["id"]): IExpense | null;
}
