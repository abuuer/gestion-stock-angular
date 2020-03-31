import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EntiteAdministrative} from "../model/administration/entite-administrative.model";


@Injectable({
  providedIn: 'root'
})
export class EntiteAdministrativeService {

  private _entiteAdministrative: EntiteAdministrativeService;
  private _entitiesAdministratives: Array<EntiteAdministrativeService>;
  private loadedEntite = new EntiteAdministrative();
  private url = 'http://localhost:8090/gestion-stock-v1/EntiteAdministrative/';

  constructor(private http: HttpClient) { }

  public findByReference(ref: string): EntiteAdministrative {
    this.http.get<EntiteAdministrative>(this.url + 'reference/' + ref).subscribe(
      data => {
          console.log('success l9A lentite');
          this.loadedEntite = data ;

      }, error => {
        console.log('Error mafoundach l entite');
        this.loadedEntite = null ;
      }
    );
    console.log(this.loadedEntite);
    return this.loadedEntite ;
  }


  get entiteAdministrative(): EntiteAdministrativeService {
    return this._entiteAdministrative;
  }

  set entiteAdministrative(value: EntiteAdministrativeService) {
    this._entiteAdministrative = value;
  }

  get entitiesAdministratives(): Array<EntiteAdministrativeService> {
    return this._entitiesAdministratives;
  }

  set entitiesAdministratives(value: Array<EntiteAdministrativeService>) {
    this._entitiesAdministratives = value;
  }

  private cloneEntite(entite: EntiteAdministrative) {
    const clone = new EntiteAdministrative();
    clone.reference = entite.reference;
    clone.nom = entite.nom;
    clone.chef = entite.chef;
    clone.employes = entite.employes;
    clone.magasins = entite.magasins;
    clone.expressionBesoins = clone.expressionBesoins;
    return clone;
  }
}
