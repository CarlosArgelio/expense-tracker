export enum ENCODING_ALLOW {
  UTF_8 = "utf-8",
}

export interface IInFileSystemSync {
  path: string;
  readonly typeFile: string;

  readFileSync(encoding?: ENCODING_ALLOW): Promise<any[]> | any[];
  writeFileSync(data: string, encoding?: ENCODING_ALLOW): Promise<void> | void;
  existsSync(): boolean;
  readdirSync(): string[];
  createFileSync(): void;
}
