import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChauffageActuelComponent } from './component/chauffage-actuel/chauffage-actuel.component';
import { ChauffageInstallationComponent } from './component/chauffage-installation/chauffage-installation.component';
import { EquipementActuelComponent } from './component/equipement-actuel/equipement-actuel.component';
import { FormulaireComponent } from './component/formulaire/formulaire.component';
import { HomeComponent } from './component/home/home.component';
import { LocalisationTravauxComponent } from './component/localisation-travaux/localisation-travaux.component';
import { LogementActuelComponent } from './component/logement-actuel/logement-actuel.component';
import { MontantEstmatifComponent } from './component/montant-estmatif/montant-estmatif.component';
import { SimulationProjetComponent } from './component/simulation-projet/simulation-projet.component';
import { SituationFamillialeComponent } from './component/situation-familliale/situation-familliale.component';
import { SituationFiscaleComponent } from './component/situation-fiscale/situation-fiscale.component';
import { SurfaceIsolationComponent } from './component/surface-isolation/surface-isolation.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/:id/formulaire', component: FormulaireComponent },
  { path: 'home/:id/logement-actuel', component: LogementActuelComponent },
  { path: 'home/:id/chauffage-actuel', component: ChauffageActuelComponent },
  { path: 'home/:id/chauffage-installation', component: ChauffageInstallationComponent },
  { path: 'home/:id/montant-estimatif', component: MontantEstmatifComponent },
  { path: 'home/:id/situation-familliale', component: SituationFamillialeComponent },
  { path: 'home/:id/situation-fiscale', component: SituationFiscaleComponent },
  { path: 'home/:id/localisation-travaux', component: LocalisationTravauxComponent },
  { path: 'home/:id/simulation-projet', component: SimulationProjetComponent },
  { path: 'home/:id/equipement-actuel', component: EquipementActuelComponent },
  { path: 'home/:id/surface-isolation', component: SurfaceIsolationComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
