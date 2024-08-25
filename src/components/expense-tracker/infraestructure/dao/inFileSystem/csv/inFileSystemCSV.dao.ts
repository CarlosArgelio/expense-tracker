import { InFileSystemCSV } from "../../../persitence";

export class InFileSystemCsvDAO {
  private readonly _data: InFileSystemCSV;

  constructor(data: InFileSystemCSV) {
    this._data = data;
  }
}
