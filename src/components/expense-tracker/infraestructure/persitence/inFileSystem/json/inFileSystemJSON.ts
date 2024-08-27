import fs from "node:fs";

import { ENCODING_ALLOW, IInFileSystemSync } from "../../../../domain/interfaces/persistence";

export class InFileSystemJSON implements IInFileSystemSync {
  path: string;
  readonly typeFile: string;

  constructor(absulutePath: string, typeFile: string) {
    this.path = absulutePath;
    this.typeFile = typeFile;

    const files = this.readdirSync();

    if (!files.includes(`${this.typeFile}.json`)) {
      this.createFileSync();
    }
  }

  readFileSync(encoding: ENCODING_ALLOW): any[] {
    return JSON.parse(fs.readFileSync(this.path, encoding));
  }
  writeFileSync(data: string, encoding: ENCODING_ALLOW): void {
    return fs.writeFileSync(this.path, data, encoding);
  }
  existsSync(): boolean {
    return fs.existsSync(this.path);
  }
  readdirSync(): string[] {
    return fs.readdirSync(this.path);
  }
  createFileSync(): void {
    const path = [this.path, this.typeFile].join("/");
    fs.writeFileSync(path, "[]");
    this.path = path;
  }
}
