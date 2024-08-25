import { InFileSystemJSON } from "../../../persitence";

export class InFileSystemJsonDAO {
  private readonly _data: InFileSystemJSON;

  constructor(data: InFileSystemJSON) {
    this._data = data;
  }
}
