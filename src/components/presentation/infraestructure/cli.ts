import { CLICreator } from "../application/useCases/cliCreator";
import { GeneratePrograms } from "../domain/services";
import { FlagsCLI } from "../../shared/constants";
import { ICommand } from "../../shared/interfaces/commands";

export class AppCreate {
  public program: ICommand;

  constructor(program: ICommand) {
    this.program = program;
  }

  create() {
    const service = new GeneratePrograms(FlagsCLI, this.program);

    const useCase = new CLICreator(service).run();
    this.program = useCase;
  }

  documentate() {
    this.program = this.program.name("expense-tracker").description("Build a simple expense tracker application to manage your finances").version("0.0.1");
  }
}
