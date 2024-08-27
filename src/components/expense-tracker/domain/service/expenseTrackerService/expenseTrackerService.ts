import { Amount, Description, ID } from "../../valueObject";
import { ICreateExpense, IExpenseTrackerRepository, IUpdateExpense } from "./../../interfaces";

export class ExpenseTrackerService {
  private readonly repository: IExpenseTrackerRepository;

  constructor(repository: IExpenseTrackerRepository) {
    this.repository = repository;
  }

  create(payload: ICreateExpense) {
    const { description, amount } = payload;

    new Description(description);
    new Amount(amount);

    return this.repository.save(payload);
  }

  findAll() {
    return this.repository.findAll();
  }

  findById(id: number) {
    new ID(id);
    return this.repository.findById(id);
  }

  update(id: number, changes: IUpdateExpense) {
    new ID(id);
    return this.repository.update(id, changes);
  }
}
