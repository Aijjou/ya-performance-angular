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
  maSituationActuelleIsCompleted: string = "maSituationActuelleIsCompleted";
  isFiscale: string = "isFiscale";
  revenuRef: number;
  revenuRef2: number;
  revenuRef3: number;
  revenuRef4: number;
  constructor(private headerService: HeaderService,
    private router: Router, private route: ActivatedRoute,
    private fb: FormBuilder, private stepperService: StepperService) {
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
    console.log(this.prospect.personneCharge)

    // hors ile de France

    if (this.prospect.personneCharge == 1) {
      this.revenuRef = 14879;
      this.revenuRef2 = 19074;
      this.revenuRef3 = 29148;
      this.revenuRef4 = 29149;
    } else if (this.prospect.personneCharge == 2) {
      this.revenuRef = 21760;
      this.revenuRef2 = 27896;
      this.revenuRef3 = 42848;
      this.revenuRef4 = 42849;
    } else if (this.prospect.personneCharge == 3) {
      this.revenuRef = 26170;
      this.revenuRef2 = 33547;
      this.revenuRef3 = 51592;
      this.revenuRef4 = 51593;
    } else if (this.prospect.personneCharge == 4) {
      this.revenuRef = 30572;
      this.revenuRef2 = 39192;
      this.revenuRef3 = 60336;
      this.revenuRef4 = 60337;
    } else if (this.prospect.personneCharge == 5) {
      this.revenuRef = 34993;
      this.revenuRef2 = 44860;
      this.revenuRef3 = 69081;
      this.revenuRef4 = 69082;

    }

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


  handleChange(evt: any) {

    if (evt.target.value == "ileDeFrance") {
      if (this.prospect.personneCharge == 1) {
        this.revenuRef = 14879;
        this.revenuRef2 = 19074;
        this.revenuRef3 = 29148;
        this.revenuRef4 = 29149;
      } else if (this.prospect.personneCharge == 2) {
        this.revenuRef = 21760;
        this.revenuRef2 = 27896;
        this.revenuRef3 = 42848;
        this.revenuRef4 = 42849;
      } else if (this.prospect.personneCharge == 3) {
        this.revenuRef = 26170;
        this.revenuRef2 = 33547;
        this.revenuRef3 = 51592;
        this.revenuRef4 = 51593;
      } else if (this.prospect.personneCharge == 4) {
        this.revenuRef = 30572;
        this.revenuRef2 = 39192;
        this.revenuRef3 = 60336;
        this.revenuRef4 = 60337;
      } else if (this.prospect.personneCharge == 5) {
        this.revenuRef = 34993;
        this.revenuRef2 = 44860;
        this.revenuRef3 = 69081;
        this.revenuRef4 = 69082;

      }

    }
    else if (evt.target.value = "HorsIleDeFrance") {
      if (this.prospect.personneCharge == 1) {
        this.revenuRef = 20593;
        this.revenuRef2 = 25068;
        this.revenuRef3 = 38184;
        this.revenuRef4 = 38185;
      } else if (this.prospect.personneCharge == 2) {
        this.revenuRef = 30225;
        this.revenuRef2 = 36792;
        this.revenuRef3 = 56130;
        this.revenuRef4 = 56131;
      } else if (this.prospect.personneCharge == 3) {
        this.revenuRef = 36297;
        this.revenuRef2 = 44188;
        this.revenuRef3 = 67585;
        this.revenuRef4 = 67586;
      } else if (this.prospect.personneCharge == 4) {
        this.revenuRef = 42381;
        this.revenuRef2 = 51597;
        this.revenuRef3 = 79041;
        this.revenuRef4 = 79042;
      } else if (this.prospect.personneCharge == 5) {
        this.revenuRef = 48488;
        this.revenuRef2 = 59026;
        this.revenuRef3 = 90496;
        this.revenuRef4 = 90497;

      }
    }
  }




  onSubmit() {

    if (this.situationFiscaleForm.valid) {

      if (this.simulation == null || this.prospect == null) {
        this.router.navigate(['/']);
      } else {
        this.prospect.lieuHabitation = this.situationFiscaleForm.get('region').value;
        this.prospect.revenuRef = this.situationFiscaleForm.get('revenu').value;
        console.log(this.prospect);
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