import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Prospect } from 'src/app/model/prospect';
import { FormulaireService } from 'src/app/service/formulaire.service';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  prospectForm: FormGroup;
  titre: string = " ";
  id: number;
  prospect: Prospect;
  submitted: boolean;
  infos: any;



  constructor(private headerService: HeaderService, private router: Router, private route: ActivatedRoute, private fomrBuild: FormBuilder, private serviceForm: FormulaireService) {
    this.id = this.route.snapshot.params.id;

  }

  ngOnInit(): void {
    this.titre = " Prise de contact";
    this.headerService.changementTitre(this.titre);
    this.prospectForm = this.fomrBuild.group({
      civilite: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      mail: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^(33|0)(6|7|9|3|1|2|3|4|5)\d{8}$/)]],
      ville: ['', Validators.required],
      code: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      condition: ['', Validators.required],
      promo: [''],
      contactConseiller: ['']
    })


  }


  get nom() {
    return this.prospectForm.get('nom');
  }
  get mail() {
    return this.prospectForm.get('mail');
  }
  get prenom() {
    return this.prospectForm.get('prenom');
  }
  get phone() {
    return this.prospectForm.get('phone');
  }
  get ville() {
    return this.prospectForm.get('ville');
  }
  get code() {
    return this.prospectForm.get('code');
  }
  get condition() {
    return this.prospectForm.get('condition');
  }

return(){
  this.router.navigate(['/']);
}

  onSubmit() {
    if (this.prospectForm.valid) {
      this.prospect = this.prospectForm.value;
      localStorage.setItem("prospect", JSON.stringify(this.prospect));
      this.serviceForm.postFormulaire(this.prospect, this.id).subscribe(data => {
        this.infos = data;
        console.log(this.infos);
      })
      this.router.navigate(['home', this.id, 'logement-actuel']);
    } else {
      this.router.navigate(['home', this.id, 'formulaire']);


    }
  }


}
