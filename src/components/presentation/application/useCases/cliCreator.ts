import { ProgramGenrateParams } from "../../domain/interfaces";
import { GeneratePrograms } from "../../domain/services";

export class CLICreator {
  private readonly service: GeneratePrograms;

  constructor(service: GeneratePrograms) {
    this.service = service;
  }

  run(commands: ProgramGenrateParams[]) {
    const createCommnads = this.service;
    createCommnads.execute(commands);
    return createCommnads.command;
  }
}
