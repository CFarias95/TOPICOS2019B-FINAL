
import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { ConsumoapiService } from '../service/consumoapi.service';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Data: any = []; 

  constructor( private menu: MenuController,public proveedeor: ConsumoapiService) {
    this.loadinfo();
  }

  ngOnInit() {     
  }
  loadinfo(){
    this.proveedeor.loadInfo().then(data=>{
      this.Data=[data];
      console.log(this.Data);
    }).catch(data=>{
      console.log(data);
    });
  }

 }
