import { Injectable } from '@angular/core';
import { Headers, Http, Response  } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class EnviarService {
  envURL= "http://localhost:3000/Tasks"



  constructor(private http: Http) { }
 postEnvio(envio: any){
    const newenvio = JSON.stringify(envio);
    const headers= new Headers ({ 'Content-Type':'application/json' });
    return this.http.post(this.envURL,newenvio,{headers})
    .map(res =>{
      console.log(res.json());
      return res.json();
    })
  }
}
