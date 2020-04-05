import {LivraisonDetail} from "./livraison-detail.model";


import {Fournisseur} from "./fournisseur.model";
import {ExpressionBesoin} from "../administration/expression-besoin.model";

export class Livraison {
  public dateLivraison: Date;
  public reference: string;
  public total: number;
  public livraisonDetails = new Array<LivraisonDetail>();
  public expressionBesoin = new ExpressionBesoin();
  public fournisseur = new Fournisseur();


  constructor() {
    this.total = 0;

  }


}
