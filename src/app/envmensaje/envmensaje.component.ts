import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/primeng'

@Component({
  selector: 'app-envmensaje',
  templateUrl: './envmensaje.component.html',
  styleUrls: ['./envmensaje.component.css']
})
export class EnvmensajeComponent implements OnInit {

  text: string;

  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit() {
  }
  
  
      confirm() {
          this.confirmationService.confirm({
              message: 'Seguro?',
              accept: () => {
                  //Actual logic to perform a confirmation
              }
          });
      }
}
