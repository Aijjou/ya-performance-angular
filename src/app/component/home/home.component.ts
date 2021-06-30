import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, Input, NO_ERRORS_SCHEMA, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { ProspectAppelDirect } from 'src/app/model/prospect-direct';
import { ProspectDirectService } from 'src/app/service/prospect-direct.service';
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
  nom: string;
  prospectAppelDirect: ProspectAppelDirect;
  private titre: string = " ";
  beforeValidation: boolean = true;

  @ViewChild('content', { static: false })
  public content: TemplateRef<any> | undefined;

  @ViewChild('rightSidebar') rightSidebar: SidebarComponent;
  public enableGestures: boolean = false;
  public type: string = 'Push';
  public position: string = 'Right';


  constructor(private headerService: HeaderService, public dialog: MatDialog, private router: Router, private fb: FormBuilder, private prospectDirectService: ProspectDirectService) { }


  onSubmit(form: NgForm) {
    this.prospectAppelDirect = form.value;
    console.log(this.prospectAppelDirect);
    this.creationProspectAppelDirect(this.prospectAppelDirect);
    this.beforeValidation = false;
    setTimeout(() => {
      this.beforeValidation = true;
      this.toggleClick();
    }, 3000);

  }

  creationProspectAppelDirect(prospectDirect: ProspectAppelDirect) {
    console.log(prospectDirect);
    this.prospectDirectService.postProspectAppelDirect(prospectDirect).subscribe((data: any) => {
      console.log(data);
    })
  }

  public onCreated(args: any) {
    this.rightSidebar.element.style.visibility = 'hidden';
  }

  toggleClick(): void {
    this.rightSidebar.toggle();
  }

  ngOnInit(): void {
    this.titre = 'Simulation Prime Energie';
    this.headerService.changementTitre(this.titre);

    var simulation = localStorage.getItem("simulation");
    var prospect = localStorage.getItem("prospect");

    if (simulation != null || prospect != null) {

      localStorage.removeItem("simulation");
      localStorage.removeItem("prospect");

    }


  }
}
