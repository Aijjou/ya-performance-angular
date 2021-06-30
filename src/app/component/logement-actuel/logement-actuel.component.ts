import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Prospect } from 'src/app/model/prospect';
import { Simulation } from 'src/app/model/simulation';
import { FormulaireService } from 'src/app/service/formulaire.service';
import { HeaderService } from 'src/app/service/header.service';
import { StepperService } from 'src/app/service/stepper.service';

@Component({
  selector: 'app-logement-actuel',
  templateUrl: './logement-actuel.component.html',
  styleUrls: ['./logement-actuel.component.scss']
})
export class LogementActuelComponent implements OnInit {
  logementActuelForm: FormGroup;
  private titre: string = " ";
  private id: number;
  simulation: Simulation;
  prospect2: Prospect;
  prospect3: Prospect = JSON.parse(localStorage.getItem("prospect"));
  logementIsCompleted: string = "logementIsCompleted";
  isLogement: string = "isLogement";


  constructor(private headerService: HeaderService, private router: Router,
    private route: ActivatedRoute, private fb: FormBuilder,
    private stepperService: StepperService, private serviceFormulaire: FormulaireService) {

    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    console.log("prospect3 " + this.prospect3);
    this.titre = "Mon logement actuel"
    this.headerService.changementTitre(this.titre);
    this.stepperService.selectionneUnStep(this.logementIsCompleted, this.isLogement, this.id);
    this.serviceFormulaire.envoi.subscribe((prospect: Prospect) => {
      this.prospect2 = prospect;
      localStorage.setItem("prospect", JSON.stringify(this.prospect2));
      console.log(this.prospect2);
      if (this.prospect2 == null) {
        this.router.navigate(['/']);
      }
    });





    this.logementActuelForm = this.fb.group({

      typeLogement: ['', Validators.required],
      anneeConstruction: ['', Validators.required],
      surface: ['', [Validators.required, Validators.pattern(/^([0-9]*[1-9][0-9]*(\.[0-9]+)?|[0]*\.[0-9]*[1-9][0-9]*)$/)]]
    })
  }

  retour() {
    this.router.navigate(['home', this.id, 'formulaire'])
  }

  onSubmit(): void {
    if (this.logementActuelForm.valid) {
      if (this.prospect2 != null) {
        this.simulation = this.logementActuelForm.value;
        localStorage.setItem("simulation", JSON.stringify(this.simulation));
        console.log(this.simulation);
        this.router.navigate(['home', this.id, 'chauffage-actuel']);
      } else {
        this.router.navigate(['/']);
      }
    } else {
      this.router.navigate(['home', this.id, 'logement-actuel']);
    }

  }


}
