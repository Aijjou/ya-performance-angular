import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Prospect } from 'src/app/model/prospect';
import { Simulation } from 'src/app/model/simulation';
import { HeaderService } from 'src/app/service/header.service';
import { StepperService } from 'src/app/service/stepper.service';

@Component({
  selector: 'app-equipement-actuel',
  templateUrl: './equipement-actuel.component.html',
  styleUrls: ['./equipement-actuel.component.scss']
})
export class EquipementActuelComponent implements OnInit {
  equipementActuelForm: FormGroup;
  id: number;
  titre: string;
  simulation: Simulation;
  prospect: Prospect;
  energie: string;
  typeChauffage1: string;
  typeChauffage2: string;
  typeChauffage3: string;
  typeChauffage4: string;
  typeChauffage5: string;
  typeChauffage6: string;
  logementIsCompleted : string = "logementIsCompleted";
  isEquipement : string = "isEquipement";




  @Input() value: string;
  @Output() valueChosen: EventEmitter<any> = new EventEmitter();

  constructor(private headerService: HeaderService, 
    private router: Router, private route: ActivatedRoute, 
    private fb: FormBuilder, private stepperService : StepperService) {

    this.id = this.route.snapshot.params.id;

  }

  ngOnInit(): void {

    this.titre = "Equipement actuel";
    this.headerService.changementTitre(this.titre);
    this.stepperService.selectionneUnStep(this.logementIsCompleted, this.isEquipement, this.id);
    var prospect2 = localStorage.getItem("prospect");
    this.prospect = JSON.parse(prospect2);
    var simulation2 = localStorage.getItem("simulation")
    this.simulation = JSON.parse(simulation2);
   
    if (this.simulation.conso == null || this.simulation.energie == null || this.prospect == null) {
      this.router.navigate(['/']);
    }

    this.changeWithSimulationType();

    this.equipementActuelForm = this.fb.group({

      equipement: ['', Validators.required]


    })



  }

  return() {

    this.router.navigate(['home', this.id, 'chauffage-actuel']);

  }


  onSubmit() {


    if (this.equipementActuelForm.valid) {
      if (this.simulation == null || this.prospect == null || (this.id == null || 0)) {
        this.router.navigate(['/']);
      } else {
        this.simulation.equipeChauffage = this.equipementActuelForm.get('equipement').value;
        localStorage.setItem('simulation', JSON.stringify(this.simulation));
        // alert("simulation : " + " " + JSON.stringify(this.simulation) + " \n " + "prospect : " + " " + JSON.stringify(this.prospect));
        this.router.navigate(['home', this.id, 'chauffage-installation']);
      }
    } else {
      if (this.simulation == null || this.prospect == null || (this.id == null || 0)) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['home', this.id, 'equipement-actuel']);
      }
    }
  }


  changeWithSimulationType() {
    switch (this.simulation.energie) {

      case "gaz": {
        this.energie = "gaz";
        this.typeChauffage1 = "Chaudière à condensation";
        this.typeChauffage2 = "Chaudière à gaz classique";
        this.typeChauffage3 = "Chaudière basse température";
        this.typeChauffage4 = "Radiateur gaz naturel";
        break;
      }
      case "electricite": {
        this.energie = "electricite";
        this.typeChauffage1 = "Convecters électriques";
        this.typeChauffage2 = "Radiateurs éléctriques à inertie";
        this.typeChauffage3 = "Chaudière électrique";
        this.typeChauffage4 = "Panneaux rayonnants";
        this.typeChauffage5 = "Plafonds chauffant";
        this.typeChauffage6 = "Plancher chauffant";
        break;
      }
      case "fioul": {
        this.energie = "fioul";
        this.typeChauffage1 = "Chaudière fioul basse température";
        this.typeChauffage2 = "Chaudière fioul à condensation";
        this.typeChauffage3 = "Chaudière fioul standard";
        this.typeChauffage4 = "Poêle à fioul";
        break;
      }
      case "pompe": {
        this.energie = "pompe";
        this.typeChauffage2 = "Pompe à chaleur air-eau";
        this.typeChauffage3 = "Pompe à chaleur eau-eau";
        this.typeChauffage4 = "Pompe à chaleur géothermique";
        break;
      }
      case "bois": {
        this.energie = "bois";
        this.typeChauffage1 = "Chaudière à bois";
        this.typeChauffage2 = "Poêle à bûches";
        this.typeChauffage3 = "Insert cheminée";
        this.typeChauffage4 = "Chaudière à granulés de bois";
        this.typeChauffage5 = "Poêle à granulés de bois";
        break;
      }
      case "charbon": {
        this.energie = "charbon";
        this.typeChauffage1 = "Chaudière à charbon";
        this.typeChauffage2 = "Poêle à charbon";
        break;
      }
      case "gpl": {
        this.energie = "gpl";
        this.typeChauffage1 = "Chaudière GPL basse température";
        this.typeChauffage2 = "Chaudière GPL à basse condensation";
        this.typeChauffage3 = "Chaudière GPL Standard";
        this.typeChauffage4 = "Radiateurs GPL";
        this.typeChauffage5 = "Poêle GPL";
        break;
      }
    }


  }



}
