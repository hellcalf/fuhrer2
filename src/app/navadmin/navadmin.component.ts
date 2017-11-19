import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from './../servicios/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-navadmin',
  templateUrl: './navadmin.component.html',
  styleUrls: ['./navadmin.component.css']
})
export class NavadminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
