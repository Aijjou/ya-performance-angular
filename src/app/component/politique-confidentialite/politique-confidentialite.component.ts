import { Component, OnInit } from '@angular/core';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-politique-confidentialite',
  templateUrl: './politique-confidentialite.component.html',
  styleUrls: ['./politique-confidentialite.component.scss']
})
export class PolitiqueConfidentialiteComponent implements OnInit {
  titre: string = "Politique de confidentialité";

  constructor(private headerService: HeaderService, private scrollToService: ScrollToService) { }

  ngOnInit(): void {
    this.headerService.changementTitre(this.titre);


  }

  triggerScrollTo() {
    
    const config: ScrollToConfigOptions = {
      target: 'destination'
    };
 
    this.scrollToService.scrollTo(config);
  }

}
