import {Role} from './role.enum';


export class User {
  id: number;
  firstName: string;
  lastName: string;
  teudatZeut: number;
  email: string;
  password: string;
  role: Role;
  token: string;

  constructor(firstName: string, lastName: string, teudatZeut: number, email: string, password: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.teudatZeut = teudatZeut;
    this.email = email;
    this.password = password;
  }
}
