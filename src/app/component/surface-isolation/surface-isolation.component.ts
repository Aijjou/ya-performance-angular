import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Prospect } from 'src/app/model/prospect';
import { Simulation } from 'src/app/model/simulation';
import { HeaderService } from 'src/app/service/header.service';
import { StepperService } from 'src/app/service/stepper.service';

@Component({
  selector: 'app-surface-isolation',
  templateUrl: './surface-isolation.component.html',
  styleUrls: ['./surface-isolation.component.scss']
})
export class SurfaceIsolationComponent implements OnInit {
  surfaceIsolationForm: FormGroup;
  simulation: Simulation;
  prospect: Prospect;
  private titre: string;
  private id: number;
  surface: number;
  monProjetIsCompleted : string = "monProjetIsCompleted";
  isSurface : string = "isSurface";


  constructor(private headerService: HeaderService, private router: Router,
     private route: ActivatedRoute, private fb: FormBuilder, private stepperService:StepperService) {

    this.id = this.route.snapshot.params.id;

  }

  ngOnInit(): void {
    this.titre = "Mon projet de rénovation"
    this.headerService.changementTitre(this.titre);
     this.stepperService.selectionneUnStep(this.monProjetIsCompleted, this.isSurface, this.id);
    var simulation2 = localStorage.getItem("simulation");
    this.simulation = JSON.parse(simulation2);
    var prospect2 = localStorage.getItem("prospect");
    this.prospect = JSON.parse(prospect2);

    if (simulation2 != null || prospect2 != null) {
      alert(simulation2);

      if (this.simulation.materielSouhaite == null || this.prospect == null || (this.id == null || 0)) {
        // alert(this.simulation.materielSouhaite);
        this.router.navigate(['/']);
      }
      this.surfaceIsolationForm = this.fb.group({
        surface: ['', [Validators.required, Validators.pattern(/^([0-9]*[1-9][0-9]*(\.[0-9]+)?|[0]*\.[0-9]*[1-9][0-9]*)$/)]]
      })
    } else {
      this.router.navigate(['/']);

    }


  }


  return() {

    this.router.navigate(['home', this.id, 'chauffage-installation']);

  }


  onSubmit() {
    if (this.surfaceIsolationForm.valid) {
      if (this.simulation == null || this.prospect == null) {
        this.router.navigate(['/']);
      } else {
        this.simulation.surfaceIsolation = this.surfaceIsolationForm.get('surface').value;
        localStorage.setItem("simulation", JSON.stringify(this.simulation));
        // alert("simulation : " + " " + JSON.stringify(this.simulation) + " \n " + "prospect : " + " " + JSON.stringify(this.prospect));
        this.router.navigate(['home', this.id, 'montant-estimatif']);
      }
    } else {
      if (this.simulation == null || this.prospect == null) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['home', this.id, 'surface-isolation'])
      }
    }
  }


}
