import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-chauffage-actuel',
  templateUrl: './chauffage-actuel.component.html',
  styleUrls: ['./chauffage-actuel.component.scss']
})
export class ChauffageActuelComponent implements OnInit {
  private titre: string = " ";


  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.titre = "Mon logement actuel"
    this.headerService.changementTitre(this.titre);
  }

}
