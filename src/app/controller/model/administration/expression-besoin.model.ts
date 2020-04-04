import { ExpressionBesoinDetail } from './expression-besoin-detail.model';
import {Produit} from "../magasin/produit.model";
import {Personnel} from "./personnel.model";
import {EntiteAdministrative} from "./entite-administrative.model";

export class ExpressionBesoin {
  public reference : String ;
  public etat : String ;
  public dateExpressionBesoin : Date ;

  public expressionBesoinDetails = new Array<ExpressionBesoinDetail>() ;
  public entiteAdministrative = new EntiteAdministrative;
  public chef = new Personnel ;

  constructor() {

  }
}
