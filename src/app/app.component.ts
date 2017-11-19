import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCyoBg6ts4_D331CxnXrlolw3NQGn76pXU",
      authDomain: "oficina-85d01.firebaseapp.com",
    });
  }
}
