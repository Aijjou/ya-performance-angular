import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Prospect } from 'src/app/model/prospect';
import { Simulation } from 'src/app/model/simulation';
import { HeaderService } from 'src/app/service/header.service';
import { StepperService } from 'src/app/service/stepper.service';

@Component({
  selector: 'app-chauffage-installation',
  templateUrl: './chauffage-installation.component.html',
  styleUrls: ['./chauffage-installation.component.scss']
})
export class ChauffageInstallationComponent implements OnInit {
  chauffageInstallationForm: FormGroup;
  prospect: Prospect;
  simulation: Simulation;
  titre: string;
  id: number;
  question: string;
  card1: string;
  card2: string;
  card3: string;
  card4: string;
  card5: string;
  card6: string;
  card7: string;
  monProjetIsCompleted : string = "monProjetIsCompleted";
  isInstall : string = "isInstall";


  constructor(private headerService: HeaderService, 
    private router: Router, private route: ActivatedRoute, 
    private fb: FormBuilder, private stepperService : StepperService) {

    this.id = this.route.snapshot.params.id;

  }

  ngOnInit(): void {
    this.titre = "Mon Projet de rénovation"
    this.headerService.changementTitre(this.titre);
    this.stepperService.selectionneUnStep(this.monProjetIsCompleted, this.isInstall, this.id);
    var prospect2 = localStorage.getItem("prospect");
    this.prospect = JSON.parse(prospect2);
    var simulation2 = localStorage.getItem("simulation")
    this.simulation = JSON.parse(simulation2);
    if(this.simulation.equipeChauffage == null || this.prospect == null){
      this.router.navigate(['/']);
    }


    if (this.id == 1) {
      this.question = "Quel matériel souhaitez-vous installer?";
      this.card1 = "Chaudière gaz à condensation"
      this.card2 = "Chaudière à bûches"
      this.card3 = "Ballon thermodynamique"
      this.card4 = "Pompe à chaleur hybride gaz"
      this.card5 = "Chaudière à granulés de bois"
      this.card6 = "Pompe à chaleur air-air"
      this.card7 = "Pompe à chaleur air-eau"

    } else if (this.id == 2) {
      this.question = "Quelle surface souhaitez-vous isoler?";
      this.card1 = "Sol ou plancher"
      this.card2 = "Combles aménagés"
      this.card3 = "Murs par l'extérieur"
      this.card4 = "Murs par l'intérieur"
      this.card5 = "Combles perdus"
      this.card6 = "Toitures terrasses"

    } else if (this.id == 3) {
      this.question = "Quel equipement souhaitez-vous installer?";
    }


    this.chauffageInstallationForm = this.fb.group({

      equipementInstall: ['', Validators.required]


    })

  }




  return() {
    this.router.navigate(['home', this.id, 'equipement-actuel']);

  }





  onSubmit() {
    if (this.chauffageInstallationForm.valid) {
      console.log(1);
      if (this.simulation == null || this.prospect == null) {
        console.log(2);
        this.router.navigate(['/']);
      } else {
        if (this.id == 1) {
          console.log(3);
          this.simulation.materielSouhaite = this.chauffageInstallationForm.get('equipementInstall').value;
          localStorage.setItem("simulation", JSON.stringify(this.simulation));
          //  alert("simulation : " + " " + JSON.stringify(this.simulation) + " \n " + "prospect : " + " " + JSON.stringify(this.prospect));
          this.router.navigate(['home', this.id, 'montant-estimatif']);
        } else if (this.id == 2) {
          console.log(4);
          this.simulation.materielSouhaite = this.chauffageInstallationForm.get('equipementInstall').value;
          console.log(this.simulation);
           localStorage.setItem("simulation", JSON.stringify(this.simulation));
          // alert("simulation : " + " " + JSON.stringify(this.simulation) + " \n " + "prospect : " + " " + JSON.stringify(this.prospect));
          this.router.navigate(['home', this.id, 'surface-isolation']);

        }
      }
    } else {
      if (this.simulation == null || this.prospect == null) {
        console.log(5);
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['home', this.id, 'chauffage-installation'])
      }

    }
  }

}
