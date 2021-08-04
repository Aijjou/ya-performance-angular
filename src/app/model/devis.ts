import { Prospect } from "./prospect";

export interface Devis {

    id?: number;
    dateCreation?: number;
    numeroclient?: number;
    intitule?: string;
    reference?: string;
    societe?: any;
    idProspect?: number;
    idSimulation? : number;
    quantite?: number;
    prixMateriel?: number;
	prixMainOeuvre?: number;
    designation?: string;
    tvaMateriel?: number;
    tvaMainOeuvre?: number;


}