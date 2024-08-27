import { ExpenseTrackerService, IExpense } from "../../../domain";

export class ExpenseTrackerDeleterCommand {
  private readonly service: ExpenseTrackerService;

  constructor(service: ExpenseTrackerService) {
    this.service = service;
  }
  run(id: IExpense["id"]) {
    return this.service.delete(id);
  }
}
