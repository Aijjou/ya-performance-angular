import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Prospect } from 'src/app/model/prospect';
import { Simulation } from 'src/app/model/simulation';
import { HeaderService } from 'src/app/service/header.service';

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


  constructor(private headerService: HeaderService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {

    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.titre = "Mon logement actuel"
    this.headerService.changementTitre(this.titre);
    var prospect = localStorage.getItem("prospect");
    this.prospect2 = JSON.parse(prospect);
    console.log(this.prospect2);

    this.logementActuelForm = this.fb.group({

      habitation: ['', Validators.required],
      annee: ['', Validators.required],
      surface: ['', [Validators.required, Validators.pattern(/^([0-9]*[1-9][0-9]*(\.[0-9]+)?|[0]*\.[0-9]*[1-9][0-9]*)$/)]]
    })
  }



  retour(){
    this.router.navigate(['home', this.id, 'formulaire'])
  }

  onSubmit(): void {
    if (this.logementActuelForm.valid) {
      if(this.prospect2 != null){
      this.simulation = this.logementActuelForm.value;
      localStorage.setItem("simulation", JSON.stringify(this.simulation));
      console.log(this.simulation);
      this.router.navigate(['home', this.id, 'chauffage-actuel']);
      }else{
        this.router.navigate(['/']);
      }
    }else{
      this.router.navigate(['home', this.id, 'logement-actuel']);
    }

  }


}
