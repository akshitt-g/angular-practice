import { Component, EventEmitter, Output, Input } from '@angular/core';
import { WishItem } from '../../../shared/models/wishitems';

@Component({
  selector: 'app-wish-filter',
  standalone: false,
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent {
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();

  listOption: string='0';

  changeFilter(value: any){
    this.filterChange.emit(this.filter)
  }
}
