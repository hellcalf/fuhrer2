import { Injectable } from '@angular/core';
import { Headers, Http, Response  } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UsuariosService {

  usURL= "http://localhost:3000/Usuarios"

  constructor(private http: Http) { }


  postUsuarios(usuarios: any){
    const newusuario = JSON.stringify(usuarios);
    const headers= new Headers ({ 'Content-Type':'application/json' });
    return this.http.post(this.usURL,newusuario,{headers})
    .map(res =>{
      console.log(res.json());
      return res.json();
    })
  }
  getUserName(){
    return this.http.get(this.usURL)
    .map(res => res.json());
    
  }

}
