import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  private titre: string = " ";



  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.titre = " Prise de contact";
    this.headerService.changementTitre(this.titre);
  }

}
