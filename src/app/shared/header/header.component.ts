import { Component, Input, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  titre!: string;


  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.change.subscribe((titre: string) => {
      this.titre = titre;

    })


  }

}


