import { Injectable } from '@angular/core';
import { Dress } from './Dress';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GetdressService {
 //user = 'keephopealive';
 //private url = `https://api.github.com/users/${this.user}`;
  url = '';
  dress: Dress = new Dress();
  constructor(private _http: Http) { }
  retrieveDresses() {
    this.url = `http://api.shopstyle.com/api/v2/products?pid=uid7225-39667915-4&format=json&cat=dresses`;
    console.log(this.url);
   return this._http.get(this.url).map(data=>data.json()).toPromise();

    /*var bubbles = this._http.get(this.url).map(data=>data.json()).toPromise();
    bubbles.then((data) => {
       // console.log("In dressservice", data.products[0].brandedName);
        for( var i = 0; i< data.products.length; i++){
        this.dress.name = data.products[i].brandedName;
        console.log("this.dress.name", this.dress.name);
        this.dress.description = data.products[i].description;
        this.dress.originalprice = data.products[i].priceLabel;
        this.dress.rentalprice = (.50 * data.products[i].description);
        this.dress.image = data.products[i].image.sizes.XLarge.url;
       // return this._http.
      // this._http.post('/dressinfo',data).map(data=>data.json()).toPromise();
       this._http.post('/dressinfo',{this.dress.name: data.products[i].brandedName }).map(data=>data.json()).toPromise();
      }
    })
      return bubbles;*/
  }

 }
