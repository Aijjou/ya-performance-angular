import { EventEmitter, Inject, Injectable, Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  titre : string = " ";

@Output()
change = new EventEmitter();

  constructor() {
    
   }

changementTitre(nextTitre : string){

  this.titre = nextTitre;
  this.change.emit(this.titre);
}


}
