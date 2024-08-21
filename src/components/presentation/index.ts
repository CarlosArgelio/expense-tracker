#!/usr/bin/env node

import { Command } from "commander";
import { AppCreate } from "./infraestructure/cli";

const command = new Command();
const app = new AppCreate(command);
app.documentate();
app.create();
app.program.parse();
