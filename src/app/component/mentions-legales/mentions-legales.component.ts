import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-mentions-legales',
  templateUrl: './mentions-legales.component.html',
  styleUrls: ['./mentions-legales.component.scss']
})
export class MentionsLegalesComponent implements OnInit {

  titre: string = "Mentions Légales";


  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.changementTitre(this.titre);
  }

}
