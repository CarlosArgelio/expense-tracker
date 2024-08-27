import { ExpenseTrackerService, IExpense, IUpdateExpense } from "../../../domain";

export class ExpenseTrackerUpdaterCommand {
  private readonly service: ExpenseTrackerService;

  constructor(service: ExpenseTrackerService) {
    this.service = service;
  }
  run(id: IExpense["id"], changes: IUpdateExpense) {
    return this.service.update(id, changes);
  }
}
