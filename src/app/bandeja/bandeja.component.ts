import { Component, OnInit } from '@angular/core';
import { EnviosService } from './../servicios/envios.service';
import {FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-bandeja',
  templateUrl: './bandeja.component.html',
  styleUrls: ['./bandeja.component.css']
})
export class BandejaComponent implements OnInit {
  envios: any[] = [];
  constructor(  private enviosService : EnviosService ) { 
    this.enviosService.getAllEnvios()
    .subscribe(envios =>{
      for (const id_envios$ in envios){
        const p = envios[id_envios$];
        p.id_envios$ = id_envios$;
        this.envios.push(envios[id_envios$]);
        console.log(envios);
      }
    })
  }
  ngOnInit() { }

  
}
