import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/IProduct';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product!: IProduct;
  cartProducts: any[] = [];
  amount:number = 0
  addButton:boolean = false
  constructor(private toastr: ToastrService) {}

  addCard(product: IProduct) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartProducts.find((item) => item.item.id == product.id);
      if (exist) {
        this.toastr.warning('this item added already before, please go to your cart');
      } else {
        this.toastr.success('This item has been added successfully');
        this.cartProducts.push({'item':  product, 'quantity': this.amount});
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
    } else {
      this.toastr.success('This item has been added successfully');
      this.cartProducts.push({item:  product, quantity: this.amount});
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }

}
