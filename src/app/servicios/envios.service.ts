import { Injectable } from '@angular/core';
import { Headers, Http, Response  } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class EnviosService {

  envURL= "http://localhost:3000/Tasks"
  borURL="http://localhost:3000/Borradores"

  constructor(private http : Http) { }


  getAllEnvios(){
    return this.http.get(this.envURL)
    .map(res => res.json());
    
  }
  getEnviosById(){
    return this.http.get(this.borURL)
    .map(res => res.json());
    
  }
}
