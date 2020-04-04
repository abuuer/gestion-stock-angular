import {Personnel} from '../administration/personnel.model';
import {Stock} from './stock.model';
import {EntiteAdministrative} from '../administration/entite-administrative.model';

export class Magasin {
  public reference: string ;
  public nom: string ;
  public nbrMAxProduit: number ;
  public nbrProduit: number ;
  public nbrMaxEmploye: number ;
  public nbremploye: number ;
  public refEntite: string ;
  public employes = new Array<Personnel>();
  public stocks = new Array<Stock>();
  public entiteAdministrative: EntiteAdministrative;
  public refMagFind: string;
  public refMagFindStockes: string;

  constructor() {
  }
}
