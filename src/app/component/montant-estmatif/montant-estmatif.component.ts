import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Prospect } from 'src/app/model/prospect';
import { Simulation } from 'src/app/model/simulation';
import { HeaderService } from 'src/app/service/header.service';
import { StepperService } from 'src/app/service/stepper.service';

@Component({
  selector: 'app-montant-estmatif',
  templateUrl: './montant-estmatif.component.html',
  styleUrls: ['./montant-estmatif.component.scss']
})
export class MontantEstmatifComponent implements OnInit {
  montantEstimatifForm: FormGroup;
  simulation: Simulation;
  prospect: Prospect;
  private titre: string = " ";
  private id: number;
  montantPose: number;
  montantMateriel: number;
  monProjetIsCompleted : string = "monProjetIsCompleted";
  isMontant : string = "isMontant";

  constructor(private headerService: HeaderService, 
    private router: Router, private route: ActivatedRoute,
     private fb: FormBuilder, private stepperService : StepperService) {
    this.id = this.route.snapshot.params.id;
  }


  ngOnInit(): void {
    this.titre = "Mon Projet de rénovation"
    this.headerService.changementTitre(this.titre);
    this.stepperService.selectionneUnStep(this.monProjetIsCompleted, this.isMontant, this.id);
    var simulation2 = localStorage.getItem("simulation");
    this.simulation = JSON.parse(simulation2);
    var prospect2 = localStorage.getItem("prospect");
    this.prospect = JSON.parse(prospect2);
    if (this.simulation.materielSouhaite == null || this.prospect == null || (this.id == null || 0)) {
      this.router.navigate(['/']);
    } else {
      if (this.id == 1) {
        switch (this.simulation.materielSouhaite) {
          case "Chaudière gaz à condensation": {
            console.log(this.simulation.materielSouhaite);
            this.montantPose = 1500;
            this.montantMateriel = 2000;
            break;
          }
          case "Chaudière à bûches": {
            this.montantPose = 2000;
            this.montantMateriel = 5000;
            break;
          }
          case "Ballon thermodynamique": {
            this.montantPose = 1200;
            this.montantMateriel = 2500;
            break;
          }
          case "Pompe à chaleur air-air": {
            this.montantPose = 2000;
            this.montantMateriel = 5500;
            break;

          } case "Pompe à chaleur air-eau": {
            this.montantPose = 2000;
            this.montantMateriel = 5500;
            break;
          }
          case "Pompe à chaleur hybride gaz": {
            this.montantPose = 1900;
            this.montantMateriel = 6000;
            break;

          }
          case "Chaudière à granulés de bois": {
            this.montantPose = 4500;
            this.montantMateriel = 12000;
            break;

          }
        }
      }
      else if (this.id == 2) {
        switch (this.simulation.materielSouhaite) {
          case "Sol ou plancher": {
            this.montantPose = 2000;
            this.montantMateriel = (this.simulation.surfaceIsolation * 10);
            break;
          }
          case "Combles aménagés": {
            this.montantPose = 2500;
            this.montantMateriel = (this.simulation.surfaceIsolation * 6);
            break;
          }
          case "Murs par l'extérieur": {
            this.montantPose = 2000;
            this.montantMateriel = (this.simulation.surfaceIsolation * 15);
            break;
          }
          case "Murs par l'intérieur": {
            this.montantPose = 1500;
            this.montantMateriel = (this.simulation.surfaceIsolation * 18);
            break;
          }
          case "Combles perdus": {
            this.montantPose = 1500;
            this.montantMateriel = (this.simulation.surfaceIsolation * 4);
            break;
          }
          case "Toitures terrasses": {
            this.montantPose = 3500;
            this.montantMateriel = (this.simulation.surfaceIsolation * 30);
            break;
          }
        }
      }
    }


    this.montantEstimatifForm = this.fb.group({

      materiel: ['', Validators.required],
      pose: ['',  Validators.required ]


    })


  }


  get materiel() {
    return this.montantEstimatifForm.get('materiel');
  }

  get pose() {
    return this.montantEstimatifForm.get('pose');
  }


  return() {
    this.router.navigate(['home', this.id, 'chauffage-installation']);
  }

  onSubmit() {
    if (this.montantEstimatifForm.valid) {
      if (this.simulation == null || this.prospect == null) {
        this.router.navigate(['/']);
      } else {
        this.simulation.montantEstimeMat = this.montantEstimatifForm.get('materiel').value;
        this.simulation.montantEstimePose = this.montantEstimatifForm.get('pose').value;
        localStorage.setItem("simulation", JSON.stringify(this.simulation));
        //  alert("simulation : " + " " + JSON.stringify(this.simulation) + " \n " + "prospect : " + " " + JSON.stringify(this.prospect));
        this.router.navigate(['home', this.id, 'situation-familliale']);
      }
    } else {
      if (this.simulation == null || this.prospect == null) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['home', this.id, 'montant-estimatif'])
      }
    }
  }
}
