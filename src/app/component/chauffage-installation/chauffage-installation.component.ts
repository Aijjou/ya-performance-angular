import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-chauffage-installation',
  templateUrl: './chauffage-installation.component.html',
  styleUrls: ['./chauffage-installation.component.scss']
})
export class ChauffageInstallationComponent implements OnInit {
  private titre: string = " ";


  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.titre = "Mon Projet de rénovation"
    this.headerService.changementTitre(this.titre);
  }


}
