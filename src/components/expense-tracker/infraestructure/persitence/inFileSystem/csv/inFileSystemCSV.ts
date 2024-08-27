import fs from "node:fs";
import csvParser from "csv-parser";
import { createObjectCsvWriter } from "csv-writer";

import { ENCODING_ALLOW, IInFileSystemSync } from "../../../../domain/interfaces/persistence";

export class InFileSystemCSV implements IInFileSystemSync {
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

  readFileSync(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const results: any[] = [];
      fs.createReadStream(this.path)
        .pipe(csvParser())
        .on("data", (data) => results.push(data))
        .on("end", () => resolve(results))
        .on("error", (err) => reject(err));
    });
  }
  writeFileSync(data: string): Promise<void> {
    const csvWriter = createObjectCsvWriter({
      path: this.path,
      header: Object.keys(data[0]).map((key) => ({ id: key, title: key })),
    });

    return csvWriter.writeRecords(data);
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
