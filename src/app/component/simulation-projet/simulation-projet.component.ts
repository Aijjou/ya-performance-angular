import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeaderService } from 'src/app/service/header.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { StepperService } from 'src/app/service/stepper.service';
import { ActivatedRoute } from '@angular/router';

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


  constructor(private headerService: HeaderService,
    private modalService: NgbModal, private stepperService: StepperService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;

  }

  ngOnInit(): void {
    this.titre = "Votre Projet";
    this.headerService.changementTitre(this.titre);
    this.stepperService.selectionneUnStep(this.maSimulationIsCompleted, this.isSimulation, this.id);
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
