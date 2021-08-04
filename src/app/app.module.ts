import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
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
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { EquipementActuelComponent } from './component/equipement-actuel/equipement-actuel.component';
import { SurfaceIsolationComponent } from './component/surface-isolation/surface-isolation.component';
import { HttpClientModule } from '@angular/common/http';
import { StepperComponent } from './shared/stepper/stepper.component';
import {MatStepperModule} from '@angular/material/stepper'
import {MatIconModule} from '@angular/material/icon';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ModalModule, TooltipModule, PopoverModule, ButtonsModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeModule } from './modules/home/home.module';
import { MentionsLegalesComponent } from './component/mentions-legales/mentions-legales.component';
import { PolitiqueConfidentialiteComponent } from './component/politique-confidentialite/politique-confidentialite.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { PolitiqueCookiesComponent } from './component/politique-cookies/politique-cookies.component';
import {MatTabsModule} from '@angular/material/tabs';
import { RedirectComponent } from './utils/redirect/redirect.component';


@NgModule({
  declarations: [
    AppComponent,
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
    StepperComponent,
    MentionsLegalesComponent,
    PolitiqueConfidentialiteComponent,
    PolitiqueCookiesComponent,
    RedirectComponent

    

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
    HttpClientModule,
    MatStepperModule,
    MatFormFieldModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    SidebarModule,
    ModalModule, 
    TooltipModule, 
    PopoverModule, 
    ButtonsModule,
    MatDialogModule,
    HomeModule,
    ScrollToModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
