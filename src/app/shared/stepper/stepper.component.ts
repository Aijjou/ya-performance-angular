import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper, MatVerticalStepper } from '@angular/material/stepper';
import { StepperService } from 'src/app/service/stepper.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  @ViewChild('stepper')
  private myStepper: MatVerticalStepper;

  @Input()
  completed: boolean;

  isLinear = true;

  @Input()
  coordonneeIsCompleted: boolean;

  @Input()
  logementIsCompleted: boolean;

  @Input()
  monProjetIsCompleted: boolean;

  @Input()
  maSituationActuelleIsCompleted: boolean;

  @Input()
  maSimulationIsCompleted: boolean;

  stepper: MatStepper;
  step: string;
  sousEtape: string;

  @Input()
  id: number;
  @Input()
  isCoordonnee: boolean;
  @Input()
  isSimulation: boolean;
  @Input()
  isLogement: boolean;
  @Input()
  isEnergie: boolean;
  @Input()
  isEquipement: boolean;
  @Input()
  isInstall: boolean;
  @Input()
  isMontant: boolean;
  @Input()
  isSurface: boolean;
  @Input()
  isFamille: boolean;
  @Input()
  isFiscale: boolean;
  @Input()
  isBeneficiaire: boolean;
  @Input()
  stepperIndex: number;

  constructor(private stepperService: StepperService) {
    this.stepperService.change.subscribe((objet: any) => {
      console.log(objet.step);
      console.log(objet.sousEtape);
      this.id = objet.id;
      this.step = objet.step;
      this.sousEtape = objet.sousEtape;
      switch (this.step) {
        case "coordonneeIsCompleted": {
          this.isCoordonnee = true;
          this.coordonneeIsCompleted = false;
          break;
        }
        case "logementIsCompleted": {

          if (this.sousEtape == "isLogement") {
            console.log(this.sousEtape);
            this.isLogement = true;
          } else if (this.sousEtape == "isEnergie") {
            this.isEnergie = true;
          } else if (this.sousEtape == "isEquipement") {
            this.isEquipement = true;
          }
          this.coordonneeIsCompleted = true;
          this.logementIsCompleted = false;
          setTimeout(() => {
            this.myStepper.selectedIndex = 1;
          }, 0);
          break;
        }
        case "monProjetIsCompleted": {
          if (this.sousEtape == "isInstall") {
            this.isInstall = true;
          } else if (this.sousEtape == "isMontant") {
            this.isMontant = true;
          } else if (this.sousEtape == "isSurface") {
            this.isSurface = true;
          }
          this.coordonneeIsCompleted = true;
          this.logementIsCompleted = true;
          this.monProjetIsCompleted = false;
          setTimeout(() => {
            this.myStepper.selectedIndex = 2;
          }, 0);
          break;

        }
        case "maSituationActuelleIsCompleted": {
          if (this.sousEtape == "isFamille") {
            this.isFamille = true;
          } else if (this.sousEtape == "isFiscale") {
            this.isFiscale = true;
          } else if (this.sousEtape == "isBeneficiaire") {
            this.isBeneficiaire = true;
          }
          setTimeout(() => {
            this.myStepper.selectedIndex = 3;
          }, 0);
          this.coordonneeIsCompleted = true;
          this.logementIsCompleted = true;
          this.monProjetIsCompleted = true;
          this.maSituationActuelleIsCompleted = false;
          break;

        }
        case "maSimulationIsCompleted": {
          if (this.sousEtape == "isSimulation") {
            this.isSimulation = true;
          }
          setTimeout(() => {
            this.myStepper.selectedIndex = 4;
          }, 0);
          this.isSimulation = true;
          this.coordonneeIsCompleted = true;
          this.logementIsCompleted = true;
          this.monProjetIsCompleted = true;
          this.maSituationActuelleIsCompleted = true;
          this.maSimulationIsCompleted = false;
          break;

        }
      }

    });
  }





  ngOnInit() { }


}
