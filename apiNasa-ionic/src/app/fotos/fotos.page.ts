import { Component, OnInit } from '@angular/core';
import { ConsumoapiService } from '../service/consumoapi.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.page.html',
  styleUrls: ['./fotos.page.scss'],
})
export class FotosPage implements OnInit {
  Data: any = []; 
  constructor( private menu: MenuController,public proveedeor: ConsumoapiService ) { 
    this.loadinfo();
  }

  ngOnInit() {
  }
  loadinfo(){
    this.proveedeor.loadfotos().then(data=>{
      this.Data=data;
      console.log(this.Data);
    }).catch(data=>{
      console.log(data);
    });
  }


}
