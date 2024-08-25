import { ICommand } from "../../shared/interfaces/commands";
import { ProgramGenrateParams } from "./interfaces";

export class GeneratePrograms {
  public command: ICommand;

  constructor(command: ICommand) {
    this.command = command;
  }

  execute(commands: ProgramGenrateParams[]) {
    commands.map((cmd) => {
      const command = this.command.command(cmd.name).description(cmd.description);

      if (cmd.action) command.action(cmd.action);
      if (cmd.arguments) cmd.arguments.map((arg) => command.argument(arg.name, arg.description, arg.defaultValue));
      if (cmd.options) cmd.options?.map((opt) => command.option(opt.flags, opt.description, opt.defaultValue));
    });
  }
}
