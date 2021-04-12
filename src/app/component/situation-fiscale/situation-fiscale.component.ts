import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-situation-fiscale',
  templateUrl: './situation-fiscale.component.html',
  styleUrls: ['./situation-fiscale.component.scss']
})
export class SituationFiscaleComponent implements OnInit {
  private titre: string = " ";

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.titre = "Ma situation actuelle"
    this.headerService.changementTitre(this.titre);
  }
}
