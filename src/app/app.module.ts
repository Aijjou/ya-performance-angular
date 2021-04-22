import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { FormulaireComponent } from './component/formulaire/formulaire.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogementActuelComponent } from './component/logement-actuel/logement-actuel.component';
import { ChauffageActuelComponent } from './component/chauffage-actuel/chauffage-actuel.component';
import { ChauffageInstallationComponent } from './component/chauffage-installation/chauffage-installation.component';
import { MontantEstmatifComponent } from './component/montant-estmatif/montant-estmatif.component';
import { SituationFamillialeComponent } from './component/situation-familliale/situation-familliale.component';
import { SituationFiscaleComponent } from './component/situation-fiscale/situation-fiscale.component';
import { LocalisationTravauxComponent } from './component/localisation-travaux/localisation-travaux.component';
import { SimulationProjetComponent } from './component/simulation-projet/simulation-projet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './component/home/home.component';
import { EquipementActuelComponent } from './component/equipement-actuel/equipement-actuel.component';
import { catchError, retry } from 'rxjs/operators';
import { SurfaceIsolationComponent } from './component/surface-isolation/surface-isolation.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FormulaireComponent,
    LogementActuelComponent,
    ChauffageActuelComponent,
    ChauffageInstallationComponent,
    MontantEstmatifComponent,
    SituationFamillialeComponent,
    SituationFiscaleComponent,
    LocalisationTravauxComponent,
    SimulationProjetComponent,
    EquipementActuelComponent,
    SurfaceIsolationComponent,

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
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
