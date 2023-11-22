import { IFormValues } from "../../form/form";

export default class DetailModel {
  public id: number | null = null;
  public name: string | null = null;
  public email: string | null = null;
  public age: number | null = null;

  constructor(item: IFormValues) {
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
  private _setId({ id }: IFormValues) {
    this.id = id;
  }

  /**
   * set body
   * @param name
   * @private
   */
  _setName({ name }: IFormValues) {
    this.name = name;
  }

  /**
   * set title
   * @param email
   * @private
   */
  _setEmail({ email }: IFormValues) {
    this.email = email;
  }

  /**
   * set userId
   * @param age
   * @private
   */
  _setAge({ age }: IFormValues) {
    this.age = age;
  }
}
