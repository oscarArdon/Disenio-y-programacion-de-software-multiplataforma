import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importando modulo para forms reactivos
import { ReactiveFormsModule } from '@angular/forms';

//Modulos de rutas
import { AppRoutingModule } from './app-routing.module';

//Modulo de componentes
import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';
import { Form5Component } from './form5/form5.component';
import { Form6Component } from './form6/form6.component';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    Form5Component,
    Form6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
