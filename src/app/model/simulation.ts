import { Adresse } from "./adresse";
import { Prospect } from "./prospect";

export interface Simulation {
    id:number;
    typeLogement: string;
    anneeConstruction: string;
    surface: number;
    surfaceIsolation : number;
    equipeChauffage: string;
    energie: string;
    conso : number;
    adresseTravaux: Adresse;
    materielSouhaite: string;
    montantEstimeMat: string;
    montantEstimePose: string;
    beneficiaireTravaux : String;
    prospect : Prospect;
}