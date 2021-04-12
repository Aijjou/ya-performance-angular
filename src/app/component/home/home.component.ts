import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../service/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 private titre : string = " ";

  constructor(  private headerService: HeaderService) { }

  ngOnInit(): void {

this.titre = 'Simulation Prime Energie';
this.headerService.changementTitre(this.titre);


  }

}
