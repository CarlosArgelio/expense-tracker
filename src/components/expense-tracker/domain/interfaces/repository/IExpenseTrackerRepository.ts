import { IExpenseTrackerDAO } from "../dao/IExpenseTrackerDAO";
import { IExpense, ICreateExpense, IUpdateExpense } from "../entity";

export interface IExpenseTrackerRepository {
  readonly dao: IExpenseTrackerDAO;

  save(payload: ICreateExpense): IExpense;
  findById(id: IExpense["id"]): IExpense;
  findAll(): IExpense[];
  update(id: IExpense["id"], changes: IUpdateExpense): IExpense;
  delete(id: IExpense["id"]): void;
}
