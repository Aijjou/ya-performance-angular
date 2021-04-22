export interface Prospect{
    id : number;
    civilite : string;
    nom: string;
    prenom: string;
    mail : string;
    phone : string;
    ville : string;
    code : string;
    situationFamilliale:string;
    personneCharge : number;
    revenuRef :string;
    lieuHabitation : string;
    contactConseiller : boolean;
    promo : boolean;
    condition : boolean;
}