import {Personnel} from './personnel.model';
import {Magasin} from '../magasin/magasin.model';
import {ExpressionBesion} from './expression-besion.model';

export class EntiteAdministrative {
  public reference: string ;
  public nom: string ;
  public employes = Array<Personnel>() ;
  public magasins = Array<Magasin>() ;
  public expressionBesoins = Array<ExpressionBesion>() ;
  public chef = new Personnel() ;
  public refEntiteTofind: string;

  constructor() {}

}
