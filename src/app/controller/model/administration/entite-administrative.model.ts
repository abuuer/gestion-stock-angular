import {Personnel} from './personnel.model';

import {ExpressionBesoin} from "./expression-besoin.model";
import {Magasin} from "../magasin/magasin.model";

export class EntiteAdministrative {
  public reference: string ;
  public nom: string ;
  public employes = Array<Personnel>() ;
  public magasins = Array<Magasin>() ;
  public expressionBesoins = Array<ExpressionBesoin>() ;
  public chef = new Personnel() ;
  public refEntiteTofind: string;
  public refMagToAddEmpl: string;
  public refEmplToAddInMag: string;

  constructor() {}

}
