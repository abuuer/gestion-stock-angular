import {Familleproduit} from "../produit/familleproduit.model";

export class Produit {
  public id: number;
  reference: string;
  public libelle: string;
  public prixUnitaireHT: number;
  public prixUnitaireTTC: number;
  public tauxTVA: number;
  public familleProduit: Familleproduit;
  public photo: string;


  constructor() {
    this.familleProduit= new Familleproduit();
    this.prixUnitaireHT = 0;
    this.prixUnitaireTTC=0;
    this.tauxTVA = 0;
  }


}

