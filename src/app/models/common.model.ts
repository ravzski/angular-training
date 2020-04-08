export class Common {

  public id: number;
  public name: string;

  constructor(fields?: any) {
    if (fields) {
      Object.assign(this, fields);
    }

    return this;
  }
}