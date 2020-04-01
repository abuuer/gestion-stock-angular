import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EntiteAdministrative} from "../model/administration/entite-administrative.model";
import {Magasin} from "../model/magasin/magasin.model";


@Injectable({
  providedIn: 'root'
})
export class EntiteAdministrativeService {

  private _entiteAdministrative: EntiteAdministrative;
  private _entitiesAdministratives: Array<EntiteAdministrative>;
  private _loadedEntite = new EntiteAdministrative();
  private url = 'http://localhost:8090/gestion-stock-v1/EntiteAdministrative/';

  constructor(private http: HttpClient) { }

  public save(entiteAdministrative: EntiteAdministrative) {
    this.http.post(this.url, this.entiteAdministrative).subscribe(
      data => {
        if (data > 0) {
          this.entitiesAdministratives.push(this.cloneEntite(this.entiteAdministrative));
          this.entiteAdministrative = null;
          console.log('success entite saved');
        } else {
          console.log('the reference of entite existe alredy or the codeChef is not valid');
          alert('the reference of entite existe alredy or the codeChef is not valid');
        }
      }, error => {
        console.log('error entite not saved ');
        alert('please fill out the form');
      }
    );
  }
  public findByReference(ref: string): EntiteAdministrative {
    this.http.get<EntiteAdministrative>(this.url + 'reference/' + ref).subscribe(
      data => {
        if (data != null) {
          console.log('success Entite founded');
          this._loadedEntite = data ;
        } else {
          alert('the reference is not valid');
          console.log('the reference is not valid');
        }
      }, error => {
        console.log('Error Entite not found');
        alert('entite not found');
        this._loadedEntite = null ;
      }
    );
    console.log(this._loadedEntite);
    return this._loadedEntite ;
  }
  public findAll() {
    this.http.get<Array<EntiteAdministrative>>(this.url + 'findAll').subscribe(
      data => {
        if (data != null) {
          console.log('success  ALL Enteties founded');
          this._entitiesAdministratives = data ;
        } else {
          console.log('Pas d entete Administrative dans la base de donnees');
          this._entitiesAdministratives = data ;
        }
      }, error => {
        console.log('error mal9Ach les EntitesAdm.');
      }
    );
  }
  public deleteByReferenceFromView(entiteAdministrative: EntiteAdministrative) {
    const index = this._entitiesAdministratives.findIndex(c => c.reference === entiteAdministrative.reference);
    if (index !== 1 ) {
      this._entitiesAdministratives.splice(index, 1);
    }
  }
  public deleteByReference(entiteAdministrative: EntiteAdministrative) {
    console.log('hada howa ref dial l entite li dazt bach deleta ' + entiteAdministrative.reference);
    this.http.delete(this.url + 'delete/' + entiteAdministrative.reference).subscribe(
      data => {
        if (data > 0) {
          this.deleteByReferenceFromView(entiteAdministrative);
          console.log('success entiteAd deleted ');
          alert('success entiteAd deleted ');

        }
      }, error => {
        console.log('entite not deleted');
        alert('entite not deleted');
      }
    );
  }

  get entiteAdministrative(): EntiteAdministrative {
    if (this._entiteAdministrative == null) {
      this._entiteAdministrative = new EntiteAdministrative() ;
    }
    return this._entiteAdministrative;
  }

  set entiteAdministrative(value: EntiteAdministrative) {
    this._entiteAdministrative = value;
  }

  get entitiesAdministratives(): Array<EntiteAdministrative> {
    if (this._entitiesAdministratives == null) {
      this._entitiesAdministratives = new Array<EntiteAdministrative>();
    }
    return this._entitiesAdministratives;
  }

  set entitiesAdministratives(value: Array<EntiteAdministrative>) {
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

  get loadedEntite(): EntiteAdministrative {
    return this._loadedEntite;
  }

  set loadedEntite(value: EntiteAdministrative) {
    this._loadedEntite = value;
  }
}
