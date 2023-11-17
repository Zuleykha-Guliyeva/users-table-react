import { IFormValues } from "../../form/form";

export default class TableModel {
  public user_id: number | null = null;
  public name: string | null = null;
  public email: string | null = null;
  public age: number | null = null;

  constructor(item: any) {
    this._setId(item);
    this._setName(item);
    this._setEmail(item);
    this._setAge(item);
  }

  /**
   * set id
   * @param id
   * @private
   */
  private _setId({ user_id }: any) {
    this.user_id = user_id;
  }

  /**
   * set body
   * @param name
   * @private
   */
  _setName({ name }: any) {
    this.name = name;
  }

  /**
   * set title
   * @param email
   * @private
   */
  _setEmail({ email }: any) {
    this.email = email;
  }

  /**
   * set userId
   * @param age
   * @private
   */
  _setAge({ age }: any) {
    this.age = age;
  }
}
