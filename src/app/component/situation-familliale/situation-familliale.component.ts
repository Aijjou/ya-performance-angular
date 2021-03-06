import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Prospect } from 'src/app/model/prospect';
import { Simulation } from 'src/app/model/simulation';
import { HeaderService } from 'src/app/service/header.service';
import { StepperService } from 'src/app/service/stepper.service';
import { updateFor } from 'typescript';

@Component({
  selector: 'app-situation-familliale',
  templateUrl: './situation-familliale.component.html',
  styleUrls: ['./situation-familliale.component.scss']
})
export class SituationFamillialeComponent implements OnInit {
  situationFamillialeForm: FormGroup;
  private titre: string;
  private id: number;
  simulation: Simulation;
  prospect: Prospect;
  maSituationActuelleIsCompleted : string = "maSituationActuelleIsCompleted";
  isFamille : string = "isFamille";

  constructor(private headerService: HeaderService,
     private router: Router, private route: ActivatedRoute,
      private fb: FormBuilder, private stepperService: StepperService) {

    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.titre = "Ma situation actuelle"
    this.headerService.changementTitre(this.titre);
    this.stepperService.selectionneUnStep(this.maSituationActuelleIsCompleted, this.isFamille, this.id);
    var simulation2 = localStorage.getItem("simulation");
    this.simulation = JSON.parse(simulation2);
    var prospect2 = localStorage.getItem("prospect");
    this.prospect = JSON.parse(prospect2);
if(simulation2 != null || prospect2 != null){
    if (this.simulation.montantEstimeMat == null || this.simulation.montantEstimePose == null || this.prospect == null || (this.id == null || 0)) {
      console.log(this.simulation.montantEstimeMat);
      this.router.navigate(['/']);
    }
  }else{
    this.router.navigate(['/']);
  }
    this.situationFamillialeForm = this.fb.group({

      personneCharge: ['', Validators.required],
      situationFamilliale: ['', Validators.required]

    })


  }


  return() {
    this.router.navigate(['home', this.id, 'montant-estimatif'])

  }


  onSubmit() {

    if (this.situationFamillialeForm.valid) {
      if (this.simulation == null || this.prospect == null) {
        this.router.navigate(['/']);
      } else {
        this.prospect.situationFamilliale = this.situationFamillialeForm.get('situationFamilliale').value;
        this.prospect.personneCharge = this.situationFamillialeForm.get('personneCharge').value;
        localStorage.setItem("prospect", JSON.stringify(this.prospect));
        // alert("simulation : " + " " + JSON.stringify(this.simulation) + " \n " + "prospect : " + " " + JSON.stringify(this.prospect));
         this.router.navigate(['home', this.id, 'situation-fiscale']);
      }
    } else {
      if (this.simulation == null || this.prospect == null) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['home', this.id, 'situation-familliale'])
      }
    }
  }



}