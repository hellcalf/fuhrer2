import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from './../servicios/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-barranav',
  templateUrl: './barranav.component.html',
  styleUrls: ['./barranav.component.css']
})
export class BarranavComponent implements OnInit {

  constructor(
    private autService: AutenticacionService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }  


  ngOnInit() {
  }

  isAuth(){
    return this.autService.isAuthenticated();
  }
  onLogout(){
    this.autService.logout();
    this.router.navigate([''])
  }
  
}
