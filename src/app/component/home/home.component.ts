import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, Input, NO_ERRORS_SCHEMA, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { NgcCookieCompliance, NgcCookieConsentConfig, NgcCookieConsentService, NgcCookiePosition, NgcCookieTheme, NgcInitializeEvent, NgcNoCookieLawEvent, NgcStatusChangeEvent } from 'ngx-cookieconsent';
import { ProspectAppelDirect } from 'src/app/model/prospect-direct';
import { ProspectDirectService } from 'src/app/service/prospect-direct.service';
import { environment } from './../../../environments/environment';
import { HeaderService } from '../../service/header.service';
import { Subscription } from 'rxjs';
import { ModalDirective } from 'angular-bootstrap-md';
import { Tab } from 'src/app/model/tab';
import { stringify } from '@angular/compiler/src/util';

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
  a: string;
  prospectAppelDirect: ProspectAppelDirect;
  private titre: string = " ";
  beforeValidation: boolean = true;
  title = "app";
  active = 'top';
  now: number;

  //keep refs to subscriptions to be able to unsubscribe later
  private popupOpenSubscription!: Subscription;
  private popupCloseSubscription!: Subscription;
  private initializingSubscription!: Subscription;
  private initializedSubscription!: Subscription;
  private initializationErrorSubscription!: Subscription;
  private statusChangeSubscription!: Subscription;
  private revokeChoiceSubscription!: Subscription;
  private noCookieLawSubscription!: Subscription;

  @ViewChild('content', { static: false })
  public content: TemplateRef<any> | undefined;

  @ViewChild('rightSidebar') rightSidebar: SidebarComponent;

  @ViewChild('modal') modal: ModalDirective;

  @ViewChild('frame2') modal2: ModalDirective;




  public enableGestures: boolean = false;
  public type: string = 'Push';
  public position: string = 'Right';


  open(): void {
    this.modal.show();
  }

  fait(): void {
    console.log("kiki");
  }
  fait2(): void {
    console.log("coco");

  }



  constructor(private headerService: HeaderService,
    public dialog: MatDialog, private router: Router, private fb: FormBuilder, private prospectService: ProspectDirectService) {
    setTimeout(() => {
      var hour = 1;
      this.now = (new Date().getTime());
      var setupTime = +localStorage.getItem('setupTime');
      this.beforeValidation = true;
      this.toggleClick();
      if (setupTime == null) {
        this.open();
      } else {
        if (this.now - setupTime > hour * 60 * 60 * 1000) {
          localStorage.clear()
          this.open();
        }
      }
    }, 3000);


  }

  onSubmit(form: NgForm) {
    this.prospectAppelDirect = form.value;

    if (this.prospectAppelDirect.isAppel == null) {
      this.prospectAppelDirect.isAppel = false;
    } if (this.prospectAppelDirect.isChaudiere == null) {
      this.prospectAppelDirect.isChaudiere = false;
    } if (this.prospectAppelDirect.isDivers == null) {
      this.prospectAppelDirect.isDivers = false;
    } if (this.prospectAppelDirect.isIsolation == null) {
      this.prospectAppelDirect.isIsolation = false;
    } if (this.prospectAppelDirect.isMessagerie == null) {
      this.prospectAppelDirect.isMessagerie = false;
    } if (this.prospectAppelDirect.isPasInteresse == null) {
      this.prospectAppelDirect.isPasInteresse = false;
    } if (this.prospectAppelDirect.isRdv == null) {
      this.prospectAppelDirect.isRdv = false;
    } if (this.prospectAppelDirect.isSolaire == null) {
      this.prospectAppelDirect.isSolaire = false;
    }
    console.log(this.prospectAppelDirect);
    this.creationProspectAppelDirect(this.prospectAppelDirect);
    this.beforeValidation = false;
  }


  creationProspectAppelDirect(prospectDirect: ProspectAppelDirect) {
    console.log(prospectDirect);
    this.prospectService.postProspectAppelDirect(prospectDirect).subscribe((data: any) => {
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


  accept() {
    this.now = (new Date().getTime());
    localStorage.setItem('setupTime', JSON.stringify(this.now));
    var setupTime = +localStorage.getItem('setupTime');
    console.log(setupTime);
    this.modal.hide();
  }

}
