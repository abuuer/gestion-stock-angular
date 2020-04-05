import { EntiteAdministrative } from './entite-administrative.model';

export class Personnel {
  public code : String ;
  public nom : String ;
  public telephone : String ;
  public fonction : String ;
  public seniorityScore : number ;
  public salary : number ;
  public yearsExp : number ;
  public codeChef : String ;
  public points : number ;
  public dateEmbauche : Date ;
  public entiteAdministrative : EntiteAdministrative ;

  constructor() {
  }
}
