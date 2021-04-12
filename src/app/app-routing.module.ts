import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChauffageActuelComponent } from './component/chauffage-actuel/chauffage-actuel.component';
import { ChauffageInstallationComponent } from './component/chauffage-installation/chauffage-installation.component';
import { FormulaireComponent } from './component/formulaire/formulaire.component';
import { HomeComponent } from './component/home/home.component';
import { LogementActuelComponent } from './component/logement-actuel/logement-actuel.component';
import { MontantEstmatifComponent } from './component/montant-estmatif/montant-estmatif.component';
import { SituationFamillialeComponent } from './component/situation-familliale/situation-familliale.component';
import { SituationFiscaleComponent } from './component/situation-fiscale/situation-fiscale.component';

const routes: Routes = [
{path: 'home', component : HomeComponent},
{path: 'formulaire', component : FormulaireComponent},
{path: 'logement-actuel', component : LogementActuelComponent},
{path: 'chauffage-actuel', component : ChauffageActuelComponent},
{path: 'chauffage-installation', component : ChauffageInstallationComponent},
{path: 'montant-estimatif', component : MontantEstmatifComponent},
{path: 'situation-familliale', component : SituationFamillialeComponent},
{path: 'situation-fiscale', component : SituationFiscaleComponent},

{path: '', component : HomeComponent},
{path: '**', component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
