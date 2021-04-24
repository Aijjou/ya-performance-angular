import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepperService {

  step: string;
  sousEtape:string;
  id:number;

  @Output()
  change = new EventEmitter();

  constructor() {

  }

  selectionneUnStep(step: string, sousEtape:string, id: number) {
    this.step = step;
    this.sousEtape = sousEtape;
    this.id = id;
    this.change.emit({step : this.step ,sousEtape: this.sousEtape, id:this.id});
  }

}
