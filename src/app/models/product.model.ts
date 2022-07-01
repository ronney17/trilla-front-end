export class ProductModel {
  _id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  datasheet: string;
  quantity: number;

  constructor(
    id: string,
    name: string,
    description: string,
    image: string,
    price: number,
    datasheet: string,
    quantity: number
  ) {
    this._id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.price = price;
    this.datasheet = datasheet;
    this.quantity = quantity;
  }
}
