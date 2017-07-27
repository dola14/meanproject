import { Injectable } from '@angular/core';
import { Dress } from './Dress';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GetdressService {
 //user = 'keephopealive';
 //private url = `https://api.github.com/users/${this.user}`;
  url = '';
  dress: Dress = null;
  constructor(private _http: Http) { }
  retrieveDresses() {
    this.url = `http://api.shopstyle.com/api/v2/products?pid=uid7225-39667915-4&format=json&cat=dresses`;
    console.log(this.url);
   //return this._http.get(this.url).map(data=>data.json()).toPromise();

    var bubbles = this._http.get(this.url).map(data=>data.json()).toPromise();
    bubbles.then((data) => {
        console.log("In dressservice", data.products[0].brandedName);
        //this.dress.name = data.products[0].brandedName
        //console.log("this.dress.name", this.dress.name);
    })
      return bubbles;
  }

 }
