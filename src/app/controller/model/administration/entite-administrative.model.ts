import {Personnel} from './personnel.model';
import {Magasin} from '../magasin/magasin.model';
import {ExpressionBesoin} from "./expression-besoin.model";

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
