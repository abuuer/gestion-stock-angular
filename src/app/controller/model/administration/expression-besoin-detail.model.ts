
import {ExpressionBesoin} from "./expression-besoin.model";
import {Produit} from "../magasin/produit.model";

export class ExpressionBesoinDetail {
  public reference : String ;
  public  qte : number ;
  public  qteLivre : number ;
  //public dateExpr : Date ;

  public produit = new Produit ;

  constructor() {
  }
}
