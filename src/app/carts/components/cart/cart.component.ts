import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/products/models/IProduct';
import { CartService } from '../../services/cart.service';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartProducts: any[] = [];
  total: any = 0;

  constructor(private dataApi:CartService, private toastr:ToastrService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getTotalPrice();
  }

  getProducts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getTotalPrice();

  }

  getTotalPrice() {
    this.total = 0
    this.cartProducts.map((item) => {
      this.total += (item.item.price * item.quantity)
    });
  }

  deleteItem(index:number){
    this.cartProducts.splice(index, 1)
    this.changeVal()
  }

  changeVal(){
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  clearCart() {
    this.cartProducts = [];
    this.getTotalPrice();
    this.changeVal()
  }

  addAmount(item: any) {
    item.quantity++;
    this.getTotalPrice();
    this.changeVal()
  }

  deleteAmount(item: any) {
    item.quantity--;
    this.getTotalPrice();
    this.changeVal()
  }

  addCart(){
    let products = this.cartProducts.map(item => {
      return {productId: item.item.id, quantity: item.quantity}
    })
    let model = {
      userId: 5,
      date: new Date(),
      products: products
    }

    this.dataApi.sendCart(model).subscribe(res => {
      this.toastr.success('The card has been added successfully')
    })
  }
}
