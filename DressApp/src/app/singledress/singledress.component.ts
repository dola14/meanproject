import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { GetdressService } from '../getdress.service';
import { Dress } from '../Dress';

@Component({
  selector: 'app-singledress',
  templateUrl: './singledress.component.html',
  styleUrls: ['./singledress.component.css']
})
export class SingledressComponent implements OnInit {
  ngOnInit(){
   // this._dress.find();
  }

   constructor(private _dress: GetdressService){  }

  /*dresses: Dress[] = [];
  dress: Dress = new Dress();

 
    tasks = [];
  name= "";
  description = '';
  price = 0;
  image = '';
  userexists = true;
  result = 0;
  ngOnInit(){
    this._dress.find();
  }

   constructor(private _dress: GetdressService){  }

    this._getdressService.find()
      .then((data)=> {
        console.log("find: this is callback in component dashboard", data);
        this.players = data.players;
      })
      .catch((err)=> {
        console.log("error retrieving messages", err);
      })*/


}
