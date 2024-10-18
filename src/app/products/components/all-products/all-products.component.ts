import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../models/IProduct';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  allProducts: IProduct[] = []
  allCats: string[] = []
  rateValue:number = 0;
  loading:boolean = true
  constructor(private dataApi:ProductsService, private toastr:ToastrService) {}
  ngOnInit() {
    this.getAllProducts()
    this.getCats()
  }

  getAllProducts(){
    this.loading = true;
    this.dataApi.getAllProducts().subscribe((res:any) => {
      this.allProducts = res
      this.loading = false;
    }, err => {
      this.toastr.error('Error: ' + err)
    })
  }

  getCats(){
    this.loading = true;
    this.dataApi.getAllCats().subscribe((res:any) => {
      this.allCats = res
      this.loading = false;
    }, err => {
      this.toastr.error('Error: ' + err)
    })
  }

  filterItems(cat:any){
    const catChosen = cat.target.value
    this.dataApi.getProductsByCat(catChosen).subscribe((res:any) => {
      (res.length < 1) ? this.getAllProducts() : this.allProducts = res
    })
  }



}
