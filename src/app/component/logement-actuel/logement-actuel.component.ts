import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-logement-actuel',
  templateUrl: './logement-actuel.component.html',
  styleUrls: ['./logement-actuel.component.scss']
})
export class LogementActuelComponent implements OnInit {

  private titre: string = " ";


  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.titre = "Mon logement actuel"
    this.headerService.changementTitre(this.titre);
  }

}
