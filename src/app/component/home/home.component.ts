import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, Input, NO_ERRORS_SCHEMA, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeaderService } from '../../service/header.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  chaudiere: string | undefined;
  animal: string | undefined;
  name: string | undefined;

  @ViewChild('content', { static: false })
  public content: TemplateRef<any> | undefined;


  private titre: string = " ";

  constructor(private headerService: HeaderService, private modalService: NgbModal, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.titre = 'Simulation Prime Energie';
    this.headerService.changementTitre(this.titre);

    var simulation = localStorage.getItem("simulation");
    var prospect = localStorage.getItem("prospect");

    if(simulation!= null || prospect != null){

      localStorage.removeItem("simulation");
      localStorage.removeItem("prospect");

    }


  }
}
