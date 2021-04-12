import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-montant-estmatif',
  templateUrl: './montant-estmatif.component.html',
  styleUrls: ['./montant-estmatif.component.scss']
})
export class MontantEstmatifComponent implements OnInit {
  private titre: string = " ";

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.titre = "Mon Projet de rénovation"
    this.headerService.changementTitre(this.titre);
  }
}
