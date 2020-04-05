import {Produit} from "../magasin/produit.model";
import {Magasin} from "../magasin/magasin.model";
import {Livraison} from "./livraison.model";

export class LivraisonDetail {
  public reference: string;
  public qte: number;
  public produit = new Produit();
  public magasin = new Magasin();
  public livraison = new Livraison();


  constructor() {
    this.qte = 0;
  }
}
