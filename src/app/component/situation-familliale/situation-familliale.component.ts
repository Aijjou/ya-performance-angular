import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-situation-familliale',
  templateUrl: './situation-familliale.component.html',
  styleUrls: ['./situation-familliale.component.scss']
})
export class SituationFamillialeComponent implements OnInit {
  private titre: string = " ";

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.titre = "Ma situation actuelle"
    this.headerService.changementTitre(this.titre);
  }

}
