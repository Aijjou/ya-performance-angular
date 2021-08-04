import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-politique-cookies',
  templateUrl: './politique-cookies.component.html',
  styleUrls: ['./politique-cookies.component.scss']
})
export class PolitiqueCookiesComponent implements OnInit {
  titre: string = "Politique des cookies";

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.changementTitre(this.titre);
  }

}
