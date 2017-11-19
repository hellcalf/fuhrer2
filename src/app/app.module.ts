import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab
import {MenuItem} from 'primeng/primeng';            //api
import { AppComponent } from './app.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { EnvmensajeComponent } from './envmensaje/envmensaje.component';
import { BarranavComponent } from './barranav/barranav.component';
import { NavadminComponent } from './navadmin/navadmin.component';
import { RegistraruserComponent } from './registraruser/registraruser.component';
import {PasswordModule, InputTextModule, EditorModule, DataTableModule, SharedModule, FileUploadModule, ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import { BandejaComponent } from './bandeja/bandeja.component';
import { RegistroComponent } from './registro/registro.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import {AutenticacionService} from './servicios/autenticacion.service';
import {HttpModule} from '@angular/http';
import {EnviosService} from './servicios/envios.service';

const routes: Routes = [
  {path: '', component: LoginuserComponent},
  {path: 'inicio', component: LoginuserComponent},
  {path: 'administrador', component: NavadminComponent,
  children: [
  {path:'agregarusuarios', component: RegistroComponent
  }
  ]
  },
  //{path: '', component: LoginuserComponent},
  //{path:'enviarmensaje', component:EnviarMensajeComponent},
  
  {path:'ingresar',component: BarranavComponent,
  children: [ // rutas hijas, se verán dentro del componente padre
  { path: 'enviarmensaje', // la ruta real es barranav/mensajenuevo
    component: EnvmensajeComponent
  },
  {
    path: 'bandejadeentrada',
    component: BandejaComponent
  },
  {
    path: 'plantillas',
    component: PlantillaComponent
  }
  ]

}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginuserComponent,
    EnvmensajeComponent,
    BarranavComponent,
    NavadminComponent,
    RegistraruserComponent,
    BandejaComponent,
    RegistroComponent,
    PlantillaComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AccordionModule,
    PasswordModule,
    EditorModule,
    InputTextModule,
    DataTableModule,
    SharedModule,
    FileUploadModule,
    ConfirmDialogModule,
    HttpModule
    
  ],
  providers: [AutenticacionService, ConfirmationService, EnviosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
