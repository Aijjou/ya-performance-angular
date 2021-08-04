import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeaderService } from 'src/app/service/header.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { StepperService } from 'src/app/service/stepper.service';
import { ActivatedRoute } from '@angular/router';
import { Simulation } from 'src/app/model/simulation';
import { Prospect } from 'src/app/model/prospect';
import { NumericLiteral, textChangeRangeIsUnchanged } from 'typescript';
import { HttpClient } from '@angular/common/http';
import { Devis } from 'src/app/model/devis';
import { DevisService } from 'src/app/service/devis.service';

@Component({
  selector: 'app-simulation-projet',
  templateUrl: './simulation-projet.component.html',
  styleUrls: ['./simulation-projet.component.scss']
})
export class SimulationProjetComponent implements OnInit {

  @ViewChild('htmlData') htmlData: ElementRef;

  private titre: string;
  maSimulationIsCompleted: string = "maSimulationIsCompleted";
  isSimulation: string = "isSimulation";
  id: number;
  simulation: Simulation;
  prospect: Prospect;
  couleur: string;
  fichier: string;
  montantAide: number;
  primEnergie: number;
  primRenov: number;
  coutTravaux: number;
  resteACharge: number;
  mensualite: number;
  nomAppareil: string;
  data: any = [];
  devis: Devis = {}

  constructor(private headerService: HeaderService,
    private modalService: NgbModal, private stepperService: StepperService,
    private route: ActivatedRoute, private http: HttpClient, private devisService: DevisService) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.titre = "Votre Projet";
    this.headerService.changementTitre(this.titre);
    this.stepperService.selectionneUnStep(this.maSimulationIsCompleted, this.isSimulation, this.id);
    var simulation2 = localStorage.getItem("simulation");
    this.simulation = JSON.parse(simulation2);
    var prospect2 = localStorage.getItem("prospect");
    this.prospect = JSON.parse(prospect2);
    console.log(this.prospect);

    if (this.prospect.lieuHabitation == 'HorsIleDeFrance') {
      if (this.prospect.personneCharge == 1) {
        console.log(this.prospect.revenuRef);
        this.couleur = this.prospect.revenuRef > 29148 ? "red" : this.prospect.revenuRef <= 29148 && this.prospect.revenuRef > 19074 ? "purple" : this.prospect.revenuRef <= 19074 && this.prospect.revenuRef > 14879 ? "yellow" : "blue"
      } else if (this.prospect.personneCharge == 2) {
        this.couleur = this.prospect.revenuRef > 42848 ? "red" : this.prospect.revenuRef <= 42848 && this.prospect.revenuRef > 27896 ? "purple" : this.prospect.revenuRef <= 27896 && this.prospect.revenuRef > 21760 ? "yellow" : "blue"

      } else if (this.prospect.personneCharge == 3) {
        this.couleur = this.prospect.revenuRef > 51592 ? "red" : this.prospect.revenuRef <= 51592 && this.prospect.revenuRef > 33547 ? "purple" : this.prospect.revenuRef <= 33547 && this.prospect.revenuRef > 26170 ? "yellow" : "blue"

      } else if (this.prospect.personneCharge == 4) {
        this.couleur = this.prospect.revenuRef > 60081 ? "red" : this.prospect.revenuRef <= 60081 && this.prospect.revenuRef > 39192 ? "purple" : this.prospect.revenuRef <= 39192 && this.prospect.revenuRef > 30572 ? "yellow" : "blue"

      }
    } else {
      if (this.prospect.personneCharge == 1) {
        console.log(this.prospect.revenuRef);
        this.couleur = this.prospect.revenuRef > 38184 ? "red" : this.prospect.revenuRef <= 38184 && this.prospect.revenuRef > 25068 ? "purple" : this.prospect.revenuRef <= 25068 && this.prospect.revenuRef > 20593 ? "yellow" : "blue"
      } else if (this.prospect.personneCharge == 2) {
        this.couleur = this.prospect.revenuRef > 56130 ? "red" : this.prospect.revenuRef <= 56130 && this.prospect.revenuRef > 36792 ? "purple" : this.prospect.revenuRef <= 36792 && this.prospect.revenuRef > 30225 ? "yellow" : "blue"

      } else if (this.prospect.personneCharge == 3) {
        this.couleur = this.prospect.revenuRef > 67585 ? "red" : this.prospect.revenuRef <= 67585 && this.prospect.revenuRef > 44188 ? "purple" : this.prospect.revenuRef <= 36297 && this.prospect.revenuRef > 36297 ? "yellow" : "blue"

      } else if (this.prospect.personneCharge == 4) {
        this.couleur = this.prospect.revenuRef > 79041 ? "red" : this.prospect.revenuRef <= 79041 && this.prospect.revenuRef > 51597 ? "purple" : this.prospect.revenuRef <= 42381 && this.prospect.revenuRef > 42381 ? "yellow" : "blue"

      }
    }
    console.log(this.couleur);
    this.fichier = "assets/data/" + this.couleur + ".json";
    this.http.get(this.fichier).subscribe(data => {
      this.data = data;
      for (let i = 0; this.data.length > i; i++) {
        console.log(this.data[i].name + " " + this.simulation.materielSouhaite);

        if (this.simulation.materielSouhaite == this.data[i].name) {

          var materiel: number = +this.simulation.montantEstimeMat;
          var pose: number = +this.simulation.montantEstimeMat;

          this.nomAppareil = this.data[i].name;
          this.montantAide = this.data[i].primeRenov + this.data[i].primeCee;
          this.primEnergie = this.data[i].primeRenov;
          this.primRenov = this.data[i].primeCee;
          this.coutTravaux = materiel + pose;
          this.resteACharge = this.coutTravaux - this.montantAide;
          this.mensualite = this.resteACharge / 60;

          console.log(this.nomAppareil + " " + this.montantAide + " " +
            this.primEnergie + " " + this.primRenov + " " + this.coutTravaux + " " + this.resteACharge + " " + this.mensualite);
          break;

        }
      }
    });
  }


  creationDevis() {
    var prospect2 = localStorage.getItem("prospect");
    this.prospect = JSON.parse(prospect2);
    var simulation2 = localStorage.getItem("simulation");
    this.simulation = JSON.parse(simulation2);
    console.log(this.prospect.id);
    this.devis.idProspect = this.prospect.id;
    this.devis.designation = this.nomAppareil;
    this.devis.prixMateriel = +this.simulation.montantEstimeMat;
    this.devis.prixMainOeuvre = +this.simulation.montantEstimePose;
    this.devis.idSimulation = this.simulation.id;

    this.devisService.postDevis(this.devis).subscribe(data => {
      console.log(data);

    });

  }

  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, { scrollable: true });
  }

  public openPDF(): void {
    let DATA = document.getElementById('htmlData');

    html2canvas(DATA).then(canvas => {
      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      var width = 300;
      var height = canvas.height * width / canvas.width;

      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, 0, width, height);

      PDF.save('angular-demo.pdf');
    });
  }


}
