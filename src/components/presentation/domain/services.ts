import { FlagsCLI } from "../../shared/constants";
import { ICommand } from "../../shared/interfaces/commands";
import { ProgramGenrateParams } from "./interfaces";

export class GeneratePrograms {
  private readonly flags: typeof FlagsCLI;
  public command: ICommand;

  constructor(flags: typeof FlagsCLI, command: ICommand) {
    this.flags = flags;
    this.command = command;
  }

  execute() {
    const commands = this.createCommand();
    commands.map((cmd) => {
      const command = this.command.command(cmd.name).description(cmd.description);

      if (cmd.action) command.action(cmd.action);
      if (cmd.arguments) cmd.arguments.map((arg) => command.argument(arg.name, arg.description, arg.defaultValue));
      if (cmd.options) cmd.options?.map((opt) => command.option(opt.flags, opt.description, opt.defaultValue));
    });
  }

  createCommand() {
    const commands: ProgramGenrateParams[] = [
      {
        // Authentication
        name: "auth",
        description: "Authenticate user",
        arguments: [
          {
            name: "<username>",
            description: "username user",
          },
          {
            name: "<password>",
            description: "password user",
          },
        ],
      },
      // Added
      {
        name: "add",
        description: "Add expenses",
        options: [this.flags.description, this.flags.amount, this.flags.category],
      },
      // Updated
      {
        name: "update",
        description: "Update expense",
        options: [this.flags.id, this.flags.description, this.flags.amount, this.flags.category],
      },
      // Deleted
      {
        name: "delete",
        description: "Delete expense",
        options: [this.flags.id],
      },
      // List
      {
        name: "list",
        description: "List expenses",
        options: [this.flags.category],
      },
      // Summary
      {
        name: "summary",
        description: "Summary all expenses",
        options: [this.flags.amount],
      },
      // Category
      {
        name: "category",
        description: "Generate a new component",
        options: [this.flags.id, this.flags.description, this.flags.delete],
      },
      // Budget
      {
        name: "budget",
        description: "Create Budget",
        options: [this.flags.mounth, this.flags.limit],
      },
      // Reports
      {
        name: "report",
        description: "Generate report",
        options: [this.flags.mounth, this.flags.type],
      },
    ];

    return commands;
  }
}
