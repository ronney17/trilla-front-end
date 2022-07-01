export class UserModel {
  _id: string;
  name: string;
  cpf: string;
  phone: string;
  birthDate: string;
  email: string;
  password: string;
  cep: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  complement: string;

  constructor(
    id: string,
    name: string,
    cpf: string,
    phone: string,
    birthDate: string,
    email: string,
    password: string,
    cep: string,
    street: string,
    number: string,
    neighborhood: string,
    city: string,
    state: string,
    complement: string
  ) {
    this._id = id;
    this.name = name;
    this.cpf = cpf;
    this.phone = phone;
    this.birthDate = birthDate;
    this.email = email;
    this.password = password;
    this.cep = cep;
    this.street = street;
    this.number = number;
    this.email = email;
    this.neighborhood = neighborhood;
    this.city = city;
    this.state = state;
    this.complement = complement;
  }
}
