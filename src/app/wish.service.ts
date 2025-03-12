import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WishItem } from '../shared/models/wishitems';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({
        "Content-type": 'application/json',
      })
    };
  }

  getWishes() {
    let options = this.getStandardOptions();
    return this.http.get('/wishes.json', options);
  }

  private addWish(wish: WishItem){
    let options = this.getStandardOptions();

    options.headers = options.headers.set('Authorization', 'value')
    this.http.post('/wishes.json', wish, options);
  }
}
