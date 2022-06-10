import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import axios, { AxiosResponse } from 'axios';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  private readonly API = `${environment.API}`;

  p: number = 1;
  products: ProductModel[] = [];

  getProducts() {
    axios.get(`${this.API}product`)
      .then((res: AxiosResponse) => {
        this.products = res.data;
      })
      .catch(res => {
        console.error(res);
      });
  }

}
