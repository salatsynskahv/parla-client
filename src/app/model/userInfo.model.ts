export class UserInfo implements Deserializable {
  username: string;
  firstName: string;
  surname: string;
  dateOfBirth: string;
  languages: string;
  nativeLanguage: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
