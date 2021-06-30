import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Adresse } from 'src/app/model/adresse';
import { Prospect } from 'src/app/model/prospect';
import { Simulation } from 'src/app/model/simulation';
import { HeaderService } from 'src/app/service/header.service';
import { SimulationService } from 'src/app/service/simulation.service';
import { StepperService } from 'src/app/service/stepper.service';

@Component({
  selector: 'app-localisation-travaux',
  templateUrl: './localisation-travaux.component.html',
  styleUrls: ['./localisation-travaux.component.scss']
})
export class LocalisationTravauxComponent implements OnInit {
  destinationTravauxForm: FormGroup;
  adresseTravauxForm: FormGroup;
  simulation: Simulation;
  prospect: Prospect;
  adresse: Adresse = undefined;
  private titre: string = " ";
  private id: number;
  private infos: any;
  maSituationActuelleIsCompleted : string = "maSituationActuelleIsCompleted";
  isBeneficiaire : string = "isBeneficiaire";



  constructor(private headerService: HeaderService,
     private router: Router, private route: ActivatedRoute, 
     private fb: FormBuilder, private simulationService: SimulationService, 
     private stepperService : StepperService) {

    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.titre = "Ma situation actuelle";
    this.headerService.changementTitre(this.titre);
    this.stepperService.selectionneUnStep(this.maSituationActuelleIsCompleted, this.isBeneficiaire, this.id);
    var simulation2 = localStorage.getItem("simulation");
    this.simulation = JSON.parse(simulation2);
    var prospect2 = localStorage.getItem("prospect");
    this.prospect = JSON.parse(prospect2);

    if (this.prospect.revenuRef == null || this.prospect.lieuHabitation == null || this.simulation == null || (this.id == null || 0)) {
      this.router.navigate(['/']);
    }


    this.destinationTravauxForm = this.fb.group({
      beneficiaire: ['', Validators.required],

    })

    this.adresseTravauxForm = this.fb.group({

      numero: ['', Validators.required],
      voie: ['', Validators.required],
      ville: ['', Validators.required],
      codePostal: ['', Validators.required]


    })


  }



  return() {
    this.router.navigate(['home', this.id, 'situation-fiscale']);
  }

  onSubmit() {
    if (this.destinationTravauxForm.valid && this.adresseTravauxForm.valid) {

      if (this.simulation == null || this.prospect == null) {
        this.router.navigate(['/']);
      } else {
        this.adresse = this.adresseTravauxForm.value;
        this.simulation.beneficiaireTravaux = this.destinationTravauxForm.get('beneficiaire').value;
        this.adresse;
        this.prospect;
        console.log(this.simulation);
        localStorage.setItem("simulation", JSON.stringify(this.simulation));
        this.router.navigate(['home', this.id, 'simulation-projet'])
        this.simulationService.postSimulation(this.simulation, this.id, this.prospect, this.adresse).subscribe(data => {
          this.infos = data
        })
        console.log(this.infos);
      }
    } else {
      if (this.simulation == null || this.prospect == null) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['home', this.id, 'localisation-travaux'])
      }
    }

  }


}
