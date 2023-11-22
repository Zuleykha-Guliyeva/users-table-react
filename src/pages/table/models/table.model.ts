import { IFormValues } from "../../form/form";

export default class TableModel {
  public id: number | null = null;
  public name: string | null = null;
  public email: string | null = null;
  public age: number | null = null;

  constructor(item: IFormValues) {
    this._setId(item.id);
    this._setName(item.name);
    this._setEmail(item.email);
    this._setAge(item.age);
  }

  private _setId(id: number | null) {
    this.id = id;
  }

  private _setName(name: string | null) {
    this.name = name;
  }

  private _setEmail(email: string | null) {
    this.email = email;
  }

  private _setAge(age: number | null) {
    this.age = age;
  }
}
