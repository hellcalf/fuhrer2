import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutenticacionService } from '.././servicios/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from '.././servicios/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  registroForm: FormGroup;
  userdata: any;
  usuarios: any;
  hoy: any;

  constructor(private formBuilder: FormBuilder,
  private autService: AutenticacionService,
  private router: Router,
  private activatedRouter: ActivatedRoute,
  private usuarioService: UsuariosService,
  ) { }

  ngOnInit() {
    this.registroForm = this.formBuilder.group({
      'email':['',[
        Validators.required,
        Validators.email]
      ],
      'password':['',[
        Validators.required,
        Validators.minLength(6)
      ]],
      'name':['']
    });
    this.registroForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onSubmit(){
    this.usuarios=this.saveUsuario();
    this.usuarioService.postUsuarios(this.usuarios)
    .subscribe(newusuario =>{})
    this.userdata=this.saveUserdata();
    this.autService.registroUsuario(this.userdata);
    this.router.navigate(['./administrador'])
    
  }
  saveUserdata(){
    const saveUserdata ={
      email: this.registroForm.get('email').value,
      password: this.registroForm.get('password').value,
    };
    return saveUserdata;
  } 
  saveUsuario(){
    const saveUsuario={
      nombre: this.registroForm.get('name').value,
      email: this.registroForm.get('email').value,
      contraseña: this.registroForm.get('password').value,
      hoy: new Date (),
    };
    return saveUsuario;
  }


  onValueChanged(data?:any){
    if (!this.registroForm){return;}
    const form = this.registroForm;
    for (const field in this.erroresForm){
      this.erroresForm[field]='';
      const control = form.get(field);
      if (control && control.dirty && !control.valid){
        const messages = this.mensajesValidacion[field];
        for (const key in control.errors){
          this.erroresForm[field] += messages[key]+ ' ';
        }
      }
    }
  }
  erroresForm ={
    'email': '',
    'password': ''
  }
  mensajesValidacion ={
    'email':{
      'required': 'Email obligatorio',
      'email': 'Introduzca una direccion email correcta'
    },
    'password':{
      'required': 'Contraseña obligatoria',
      'minlength': 'Debe contener más de 6 caracteres'
    }

  }

}
