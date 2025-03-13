import { Component, OnInit } from '@angular/core';
import { WishItem } from '../../shared/models/wishitems';
import {EventService} from '../../shared/services/EventServices';
import { WishService } from '../wish.service';

@Component({
  selector: 'app-wish',
  standalone: false,
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent implements OnInit {

  items: WishItem[] = [];

  constructor(events: EventService, private wishService: WishService){
    events.listen('removeWish', (wish: any) => {
      let index = this.items.indexOf(wish)
      this.items.splice(index,1)
    })
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data: any) => {
      this.items = data
    },
    (error: any) => {
      alert(error.message)
    }
  )
}

listOption='0';

get visibleItems() : WishItem[] {
  if(this.listOption==='0'){
    return this.items;
  } else if(this.listOption==='1') {
    return this.items.filter(item => item.isComplete)
  } else {
     return this.items.filter(item => !item.isComplete)
  }
}

}
