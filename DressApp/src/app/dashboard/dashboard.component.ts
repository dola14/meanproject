/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/

import { Component, OnInit } from '@angular/core';
import { GetdressService } from '../getdress.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit { 
  tasks = [];
  name= "";
  description = '';
  price = 0;
  image = '';
  userexists = true;
  result = 0;
  ngOnInit(){
    this.getTasks();
  }
  getTasks(){
    this.name = this.name;
    console.log("name:",this.name);
    this._getdressService.retrieveDresses()
    .then( tasks => { this.tasks = tasks; 
      console.log("in ddcomp", tasks.products);
    
      //this.result = tasks.public_repos + tasks.followers;      
      this.description = tasks.description; })

    .catch( err => { console.log(err);}) 
        
  }   
   constructor(private _getdressService: GetdressService){
  }  
}

