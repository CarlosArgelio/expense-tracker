import { ProgramGenrateParams } from "./interfaces";

export const commands: ProgramGenrateParams[] = [
  // Authentication
  {
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
    action: (username, password) => {
      console.log("username:", username);
      console.log("password:", password);
    },
  },
  // Added
  {
    name: "add",
    description: "Add expenses",
    options: [
      {
        flags: "-d, --description <description>",
        description: "Description of the expense",
      },
      {
        flags: "-a, --amount <amount>",
        description: "Amount of the expense",
      },
      {
        flags: "-c, --category <category>",
        description: "Category of the expense",
      },
    ],
    action: (options) => {
      console.log(`Description: ${options.description}, Amount: ${options.amount}`);
      console.log(`${options.category ? `Category: ${options.category}` : ""}`);
    },
  },

  // Updated
  {
    name: "update",
    description: "Update expense",
    options: [
      {
        flags: "--id <id>",
        description: "Id of the expense",
      },
      {
        flags: "-d, --description <description>",
        description: "Description of the expense",
      },
      {
        flags: "-a, --amount <amount>",
        description: "Amount of the expense",
      },
      {
        flags: "-c, --category <category>",
        description: "Category of the expense",
      },
    ],
    action: (options) => {
      console.log("ID: ", options.id);
      console.log("Description: ", options.description);
      console.log("Amount: ", options.amount);
      console.log("Category: ", options.category);
    },
  },

  // Deleted
  {
    name: "delete",
    description: "Delete expense",
    options: [
      {
        flags: "--id <id>",
        description: "Id of the expense",
      },
    ],
    action: (options) => {
      console.log("ID: ", options.id);
    },
  },

  // List
  {
    name: "list",
    description: "List expenses",
    options: [
      {
        flags: "-c, --category <category>",
        description: "Category of the expense",
      },
    ],
    action: (options) => {
      console.log("Category: ", options.category);
    },
  },

  // Summary
  {
    name: "summary",
    description: "Summary all expenses",
    options: [
      {
        flags: "-a, --amount <amount>",
        description: "Amount of the expense",
      },
    ],
    action: (options) => {
      console.log("Amount: ", options.amount);
    },
  },

  // Category
  {
    name: "category",
    description: "Generate a new component",
    options: [
      {
        flags: "--id <id>",
        description: "Id of the category",
      },
      {
        flags: "-d, --description <description>",
        description: "Description of the category",
      },
      {
        flags: "--delete <delete>",
        description: "Delete of the category",
      },
    ],
    action: (options) => {
      console.log("ID: ", options.id);
      console.log("Description: ", options.description);
      console.log("Delete: ", options.delete);
    },
  },

  // Budget
  {
    name: "budget",
    description: "Create Budget",

    options: [
      {
        flags: "-m, --mounth <mounth>",
        description: "Mounth of the budget to create",
      },
      {
        flags: "-l, --limit <limit>",
        description: "limit of the budget to create",
      },
    ],
    action: (options) => {
      console.log("Mounth: ", options.mounth);
      console.log("Limit: ", options.limit);
    },
  },

  // Reports
  {
    name: "report",
    description: "Generate report",
    options: [
      {
        flags: "-m, --mounth <mounth>",
        description: "Mounth of the report to generate",
      },
      {
        flags: "-t, --type <type>",
        description: "Type of the report, only allow CSV",
      },
    ],
    action: (name, options) => {
      console.log("Mounth: ", options.mounth);
      console.log("Type: ", options.type);
    },
  },
];
