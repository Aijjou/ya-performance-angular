import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Prospect } from 'src/app/model/prospect';
import { Simulation } from 'src/app/model/simulation';
import { HeaderService } from 'src/app/service/header.service';
import { StepperService } from 'src/app/service/stepper.service';

@Component({
  selector: 'app-chauffage-actuel',
  templateUrl: './chauffage-actuel.component.html',
  styleUrls: ['./chauffage-actuel.component.scss']
})
export class ChauffageActuelComponent implements OnInit {
  chauffageActuelForm: FormGroup;
  unite: string = "Kwh";
  titre: string = " ";
  id: number;
  id2: any;
  conso: number;
  simulation: Simulation;
  prospect : Prospect;
  logementIsCompleted : string = "logementIsCompleted";
  isEnergie : string = "isEnergie";





  @Input() value: string;
  @Output() valueChosen: EventEmitter<any> = new EventEmitter();

  constructor(private headerService: HeaderService, private router: Router, 
    private route: ActivatedRoute, private fb: FormBuilder, private stepperService : StepperService) {

    this.id = this.route.snapshot.params.id;
  
  }

  ngOnInit(): void {
    this.titre = "Mon logement actuel"
    this.headerService.changementTitre(this.titre);
    this.stepperService.selectionneUnStep(this.logementIsCompleted, this.isEnergie, this.id);
    var simulation2 = localStorage.getItem("simulation")
    this.simulation = JSON.parse(simulation2);
    var prospect2 =  localStorage.getItem("prospect");
    this.prospect = JSON.parse(prospect2);
    if(this.prospect==null ||this.simulation == null ){
      this.router.navigate(['/']);
    } 


    this.chauffageActuelForm = this.fb.group({
      energie: ['', Validators.required],
      conso: ['', [Validators.required, Validators.pattern(/^([0-9]*[1-9][0-9]*(\.[0-9]+)?|[0]*\.[0-9]*[1-9][0-9]*)$/)]]
    })

  }


  return(){
    this.router.navigate(['home', this.id, 'logement-actuel']);
  }

  handleChange(evt:any) {

    switch (evt.target.value) {
      case "electricté": {
        this.unite = "Kwh";
        break;
      }
      case "gaz": {
        this.unite = "Kwh";
        break;
      }
      case "fioul": {
        this.unite = "Litre";
        break;
      }
      case "bois": {
        this.unite = "Stère";
        break;
      }
      case "pompe": {
        this.unite = "Kwh";
        break;
      }
      case "gpl": {
        this.unite = "m3";
        break;
      }
      case "charbon": {
        this.unite = "kg";
        break;
      }
      default: {
        this.unite = "Kwh";
        break;
      }
    }


  }



  onSubmit(): void {

    if (this.chauffageActuelForm.valid) {
      this.simulation.energie = this.chauffageActuelForm.get('energie').value;
      this.simulation.conso = this.chauffageActuelForm.get('conso').value;
      console.log(this.simulation);
      localStorage.setItem("simulation", JSON.stringify(this.simulation));

      this.router.navigate(['home', this.id, 'equipement-actuel']);

    } else {

      this.router.navigate(['home', this.id, 'chauffage-actuel']);
    }

  }





}
