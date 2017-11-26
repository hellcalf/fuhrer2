import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/primeng'
import {FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EnviarService } from '.././servicios/enviar.service';

@Component({
  selector: 'app-envmensaje',
  templateUrl: './envmensaje.component.html',
  styleUrls: ['./envmensaje.component.css']
})
export class EnvmensajeComponent implements OnInit {

  text: string;
  envioForm: FormGroup;
  envio: any;
  hoy: any;
  enviodata: any;

  constructor(private confirmationService: ConfirmationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private enviarService: EnviarService,
) {}

  ngOnInit() {
    this.envioForm = this.formBuilder.group({
        'asunto':['',[
          Validators.required,
        ]
        ],
        'destinatario':['',[
          Validators.required
        ]],
        'texto':['']
      });
  }
  onSubmit(){
    this.envio=this.saveEnvio();
    this.enviarService.postEnvio(this.envio)
    .subscribe(newenvio =>{})
  }

  saveEnvio(){
    const saveEnvio={
      destinatario: this.envioForm.get('destinatario').value,
      asunto: this.envioForm.get('asunto').value,
      texto: this.envioForm.get('texto').value,
      hoy: new Date (),
    };
    return saveEnvio;
  }
  
      confirm() {
          this.confirmationService.confirm({
              message: 'Seguro?',
              accept: () => {
                this.router.navigate(['./ingresar/bandejadeentrada'])
                  //Actual logic to perform a confirmation
              }
          });
      }
}
