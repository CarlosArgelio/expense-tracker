import { ExpenseTrackerService } from "../../../domain";

export class ExpenseTrackerFinderCommand {
  private readonly service: ExpenseTrackerService;

  constructor(service: ExpenseTrackerService) {
    this.service = service;
  }
  run() {
    return this.service.findAll();
  }
}
