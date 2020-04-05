import {Magasin} from "./magasin.model";
import {Produit} from "./produit.model";


export class Stock {
  public reference: string ;
  public qte: number ;
  public qteDiff: number ;
  public quantiteMax: number ;
  public magasin = new Magasin();
  public produit = new Produit();
  public quantiteToRemoveOrToAdd: number;

  constructor() {
  }
}
