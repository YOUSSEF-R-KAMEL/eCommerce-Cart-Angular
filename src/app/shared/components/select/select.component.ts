import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() title: string = ""
  @Input() allCats:any[] = []
  @Output() selectItem = new EventEmitter()

  filterItems(event:any){
    this.selectItem.emit(event)
  }


}
