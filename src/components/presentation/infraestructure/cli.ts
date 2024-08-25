import { CLICreator } from "../application/useCases/cliCreator";
import { GeneratePrograms } from "../domain/services";
import { ICommand } from "../../shared/interfaces/commands";
import { commands } from "./commands";

export class AppCreate {
  public program: ICommand;

  constructor(program: ICommand) {
    this.program = program;
  }

  create() {
    const service = new GeneratePrograms(this.program);

    const useCase = new CLICreator(service).run(commands);
    this.program = useCase;
  }

  documentate() {
    this.program = this.program.name("expense-tracker").description("Build a simple expense tracker application to manage your finances").version("0.0.1");
  }
}
