import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { FormulaireComponent } from './component/formulaire/formulaire.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogementActuelComponent } from './component/logement-actuel/logement-actuel.component';
import { ChauffageActuelComponent } from './component/chauffage-actuel/chauffage-actuel.component';
import { ChauffageInstallationComponent } from './component/chauffage-installation/chauffage-installation.component';
import { MontantEstmatifComponent } from './component/montant-estmatif/montant-estmatif.component';
import { SituationFamillialeComponent } from './component/situation-familliale/situation-familliale.component';
import { SituationFiscaleComponent } from './component/situation-fiscale/situation-fiscale.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormulaireComponent,
    LogementActuelComponent,
    ChauffageActuelComponent,
    ChauffageInstallationComponent,
    MontantEstmatifComponent,
    SituationFamillialeComponent,
    SituationFiscaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
