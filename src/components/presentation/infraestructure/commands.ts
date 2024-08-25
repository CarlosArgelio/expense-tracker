import { FlagsCLI } from "../../shared/constants";
import { ProgramGenrateParams } from "../domain/interfaces";

export const commands: ProgramGenrateParams[] = [
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
    options: [FlagsCLI.description, FlagsCLI.amount, FlagsCLI.category],
  },
  // Updated
  {
    name: "update",
    description: "Update expense",
    options: [FlagsCLI.id, FlagsCLI.description, FlagsCLI.amount, FlagsCLI.category],
  },
  // Deleted
  {
    name: "delete",
    description: "Delete expense",
    options: [FlagsCLI.id],
  },
  // List
  {
    name: "list",
    description: "List expenses",
    options: [FlagsCLI.category],
  },
  // Summary
  {
    name: "summary",
    description: "Summary all expenses",
    options: [FlagsCLI.amount],
  },
  // Category
  {
    name: "category",
    description: "Generate a new component",
    options: [FlagsCLI.id, FlagsCLI.description, FlagsCLI.delete],
  },
  // Budget
  {
    name: "budget",
    description: "Create Budget",
    options: [FlagsCLI.mounth, FlagsCLI.limit],
  },
  // Reports
  {
    name: "report",
    description: "Generate report",
    options: [FlagsCLI.mounth, FlagsCLI.type],
  },
];
