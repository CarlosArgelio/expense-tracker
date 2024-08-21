import { GeneratePrograms } from "../../domain/services";

export class CLICreator {
  private readonly service: GeneratePrograms;

  constructor(service: GeneratePrograms) {
    this.service = service;
  }

  run() {
    const createCommnads = this.service;
    createCommnads.execute();
    return createCommnads.command;
  }
}
