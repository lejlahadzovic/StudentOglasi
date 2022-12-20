import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import { UniverzitetiComponent } from './univerziteti/univerziteti.component';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { FakultetiComponent } from './fakulteti/fakulteti.component';
import { StudentiComponent } from './studenti/studenti.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDialogModule} from "@angular/material/dialog";
import { IzdavaciSmjestajaComponent } from './izdavaci-smjestaja/izdavaci-smjestaja.component';
import { ReferentiFakultetaComponent } from './referenti-fakulteta/referenti-fakulteta.component';
import { ReferentiUniverzitetaComponent } from './referenti-univerziteta/referenti-univerziteta.component';
import { UposleniciFirmeComponent } from './uposlenici-firme/uposlenici-firme.component';
import {MatMenuModule} from "@angular/material/menu";
import { UposleniciStipenditoraComponent } from './uposlenici-stipenditora/uposlenici-stipenditora.component';
import { ObjaveComponent } from './objave/objave.component';
import { PrakseComponent } from './prakse/prakse.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { StipendijeComponent } from './stipendije/stipendije.component';
import { SmjestajiComponent } from './smjestaji/smjestaji.component';

@NgModule({
  declarations: [
    AppComponent,
    UniverzitetiComponent,
    FakultetiComponent,
    StudentiComponent,
    IzdavaciSmjestajaComponent,
    ReferentiFakultetaComponent,
    ReferentiUniverzitetaComponent,
    UposleniciFirmeComponent,
    UposleniciStipenditoraComponent,
    ObjaveComponent,
    PrakseComponent,
    StipendijeComponent,
    SmjestajiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    RouterModule.forRoot([
      {path: 'putanja-univerziteti', component: UniverzitetiComponent},
      {path: 'putanja-fakulteti', component: FakultetiComponent},
      {path: 'putanja-studenti', component: StudentiComponent},
      {path: 'putanja-izdavaci', component: IzdavaciSmjestajaComponent},
      {path: 'putanja-referentifakulteta', component: ReferentiFakultetaComponent},
      {path: 'putanja-referentiuniverziteta', component: ReferentiUniverzitetaComponent},
      {path: 'putanja-uposleniciFirme', component: UposleniciFirmeComponent},
      {path: 'putanja-uposleniciStipenditora', component: UposleniciStipenditoraComponent},
      {path: 'putanja-objave', component: ObjaveComponent},
      {path: 'putanja-prakse', component: PrakseComponent},
      {path: 'putanja-stipendije', component: StipendijeComponent},
      {path: 'putanja-smjestaji', component: SmjestajiComponent}
    ]),
    FormsModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatDialogModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
