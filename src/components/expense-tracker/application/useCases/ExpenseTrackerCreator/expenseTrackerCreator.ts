import { ExpenseTrackerService, ICreateExpense } from "../../../domain";

export class ExpenseTrackerCreatorCommand {
  private readonly service: ExpenseTrackerService;

  constructor(service: ExpenseTrackerService) {
    this.service = service;
  }
  run(payload: ICreateExpense) {
    return this.service.create(payload);
  }
}
