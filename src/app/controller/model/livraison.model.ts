import {LivraisonDetail} from "./livraison-detail.model";
import {ExpressionBesion} from "./expression-besion.model";
import {Fournisseur} from "./fournisseur.model";

export class Livraison {
  public dateLivraison: Date;
  public reference: string;
  public total: number;
  public livraisonDetails = new Array<LivraisonDetail>();
  public expressionBesoin = new ExpressionBesion();
  public fournisseur = new Fournisseur();


  constructor() {
    this.total = 0;

  }


}
