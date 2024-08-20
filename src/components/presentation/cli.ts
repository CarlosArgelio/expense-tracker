import { Command } from "commander";
import { ProgramGenrateParams } from "./interfaces";

export class CommandLineGenerator {
  program: Command;

  constructor() {
    this.program = new Command();
  }

  generate(commands: ProgramGenrateParams[]) {
    this.program.name("cli").description("CLI to someJavaScript").version("0.1.0");

    commands.map((cmd) => {
      const command = this.program.command(cmd.name).description(cmd.description);

      if (cmd.action) command.action(cmd.action);
      if (cmd.arguments) cmd.arguments.map((arg) => command.argument(arg.name, arg.description, arg.defaultValue));
      if (cmd.options) cmd.options?.map((opt) => command.option(opt.flags, opt.description, opt.defaultValue));
    });

    this.program.parse();
  }
}
