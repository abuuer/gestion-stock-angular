import {Familleproduit} from "./familleproduit.model";

export class Produit {
  public id: number;
  private _reference: string;
  public libelle: string;
  public prixUnitaireHT: number;
  public prixUnitaireTTC: number;
  public tauxTVA: number;
  public familleProduit: Familleproduit;


  constructor() {
    this.familleProduit= new Familleproduit();
    this.prixUnitaireHT = 0;
    this.prixUnitaireTTC=0;
    this.tauxTVA = 0;
  }

  get reference(): string {
    return this._reference;
  }

  set reference(value: string) {
    this._reference = value;
  }
}

