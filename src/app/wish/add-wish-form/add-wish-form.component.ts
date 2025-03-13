import { Component, EventEmitter, Output } from '@angular/core';
import { WishItem } from '../../../shared/models/wishitems';

@Component({
  selector: 'app-add-wish-form',
  standalone: false,
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {

  @Output() addWish = new EventEmitter<WishItem>();
  
  newWishText : string='';

  addNewWish(e: MouseEvent){
    e.preventDefault();
    this.addWish.emit(new WishItem(this.newWishText))
    this.newWishText=''
  }
}
