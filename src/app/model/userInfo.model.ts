export class UserInfoModel implements Deserializable {
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  languages: string;
  nativeLanguage: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
