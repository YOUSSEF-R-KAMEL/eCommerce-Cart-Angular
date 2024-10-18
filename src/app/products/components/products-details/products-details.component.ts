import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/IProduct';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent implements OnInit {
  loading: boolean = true;
  item!: IProduct;
  id:number = 0

  constructor(private route:ActivatedRoute, private dataApi:ProductsService){
    this.id = +route.snapshot.params['id']
    console.log(this.id)
  }

  ngOnInit(): void {
    this.getProductById(this.id)

  }

  getProductById(id:number){
    this.loading = true
    this.dataApi.getProductById(id).subscribe((res:any) => {
      this.item = res
      this.loading = false
    })
  }


}
