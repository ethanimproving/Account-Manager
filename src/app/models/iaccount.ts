export interface IAccount {
  id: number;
  name: string;
  email: string;
  isEmployee: boolean;
  departmentId: number;
  phoneNumbers: IPhoneNumber[];
}

export interface IPhoneNumber {
  number: string;
  type: string;
}

// let x: IAccount;

// let x: IAccount = {
//   id:1,
//   name: 'Ethan',
//   email: 'afdasdf',
//   isEmployee: false,
//   departmentId: 'saf'
// }