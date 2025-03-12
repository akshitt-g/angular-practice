import { Component, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishitems';
import {EventService} from '../../shared/services/EventServices';

@Component({
  selector: 'app-wish-list',
  standalone: false,
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  
  @Input() visibleItems: WishItem[] = [];

  constructor( private events: EventService){}

  toggle(item: WishItem){
    item.isComplete = !item.isComplete;
    console.log(item)
  }

  removeWish(item: WishItem){
    this.events.emit('removeWish', item)
  }
}
