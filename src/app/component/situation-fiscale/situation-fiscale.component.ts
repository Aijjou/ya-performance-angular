import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Prospect } from 'src/app/model/prospect';
import { Simulation } from 'src/app/model/simulation';
import { HeaderService } from 'src/app/service/header.service';
import { StepperService } from 'src/app/service/stepper.service';

@Component({
  selector: 'app-situation-fiscale',
  templateUrl: './situation-fiscale.component.html',
  styleUrls: ['./situation-fiscale.component.scss']
})
export class SituationFiscaleComponent implements OnInit {
  situationFiscaleForm: FormGroup;
  private titre: string = " ";
  private id: number;
  prospect: Prospect;
  simulation: Simulation;
  maSituationActuelleIsCompleted : string = "maSituationActuelleIsCompleted";
  isFiscale : string = "isFiscale";



  constructor(private headerService: HeaderService, 
    private router: Router, private route: ActivatedRoute, 
    private fb: FormBuilder, private stepperService : StepperService) {


    this.id = this.route.snapshot.params.id;


  }

  ngOnInit(): void {
    this.titre = "Ma situation actuelle"
    this.headerService.changementTitre(this.titre);
    this.stepperService.selectionneUnStep(this.maSituationActuelleIsCompleted, this.isFiscale, this.id);
    var simulation2 = localStorage.getItem("simulation");
    this.simulation = JSON.parse(simulation2);
    var prospect2 = localStorage.getItem("prospect");
    this.prospect = JSON.parse(prospect2);

    if (this.prospect.personneCharge == null || this.prospect.situationFamilliale == null || this.simulation == null || (this.id == null || 0)) {
      this.router.navigate(['/']);
    }

    this.situationFiscaleForm = this.fb.group({
      region: ['', Validators.required],
      revenu: ['', Validators.required]

    })


  }


  return() {
    this.router.navigate(['home', this.id, 'situation-familliale'])

  }

  onSubmit() {

    if (this.situationFiscaleForm.valid) {
      if (this.simulation == null || this.prospect == null) {
        this.router.navigate(['/']);
      } else {
        this.prospect.lieuHabitation = this.situationFiscaleForm.get('region').value;
        this.prospect.revenuRef = this.situationFiscaleForm.get('revenu').value;
        localStorage.setItem("prospect", JSON.stringify(this.prospect));
        // alert("simulation : " + " " + JSON.stringify(this.simulation) + " \n " + "prospect : " + " " + JSON.stringify(this.prospect));
         this.router.navigate(['home', this.id, 'localisation-travaux'])
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