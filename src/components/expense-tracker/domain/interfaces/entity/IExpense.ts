export interface IExpense {
  id: number;
  description: string;
  amount: number;
  date: Date;
}
export type ICreateExpense = Pick<IExpense, "description" | "amount">;
export type IUpdateExpense = Partial<Pick<IExpense, "description" | "amount">>;
