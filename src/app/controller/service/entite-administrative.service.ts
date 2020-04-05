import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EntiteAdministrative} from "../model/administration/entite-administrative.model";



@Injectable({
  providedIn: 'root'
})
export class EntiteAdministrativeService {

  private _entiteAdministrative: EntiteAdministrative;
  private _entitiesAdministratives: Array<EntiteAdministrative>;
  private _loadedEntite = new EntiteAdministrative();
  private foundedEntites = new Array<EntiteAdministrative>();
  private url = 'http://localhost:8090/gestion-stock-v1/EntiteAdministrative/';

  constructor(private http: HttpClient) { }

  public save(entiteAdministrative: EntiteAdministrative) {
    this.http.post(this.url, this.entiteAdministrative).subscribe(
      data => {
        if (data > 0) {
          this.entitiesAdministratives.push(this.cloneEntite(this.entiteAdministrative));
          this.entiteAdministrative = null;
          console.log('success entite saved');
          alert('success entite Administrative saved');
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
          this.loadedEntite = data ;
          console.log('success Entite founded');
          console.log('lmagsins li jaw m3aha : ' + this.loadedEntite.magasins);
        } else {
          alert('the reference is not valid');
          console.log('the reference is not valid');
        }
      }, error => {
        console.log('Error Entite not found');
        alert('entite not found');
        this.loadedEntite = null ;
      }
    );
    console.log(this.loadedEntite);
    return this.loadedEntite ;
  }

  public findEntiteAdministrativeByChef(code: string): EntiteAdministrative {
    this.http.get<EntiteAdministrative>(this.url + 'findEntiteByChef/codeChef/' + code).subscribe(
      data => {
        if (data != null) {
          this.loadedEntite = data ;
          console.log('success Entite founded');
          console.log('lmagsins li jaw m3aha : ' + this.loadedEntite.magasins);
        } else {
          alert('the code of Chef is not valid');
          console.log('the code of Chef is not valid');
        }
      }, error => {
        console.log('Error Entite not found');
        alert('entite not found');
        this.loadedEntite = null ;
      }
    );
    console.log(this.loadedEntite);
    return this.loadedEntite ;
  }
  public findAll() {
    this.http.get<Array<EntiteAdministrative>>(this.url + 'findAll').subscribe(
      data => {
        if (data != null) {
          console.log('success  ALL Enteties founded');
          this.entitiesAdministratives = data ;
        } else {
          console.log('Pas d entete Administrative dans la base de donnees');
          this.entitiesAdministratives = data ;
        }
      }, error => {
        console.log('error mal9Ach les EntitesAdm.');
      }
    );
  }

  public findAllEntites(): Array<EntiteAdministrative> {
    this.http.get<Array<EntiteAdministrative>>(this.url + 'findAll').subscribe(
      data => {
        if (data != null) {
          console.log('success  ALL Enteties founded');
          this.foundedEntites = data ;
        } else {
          console.log('Pas d entete Administrative dans la base de donnees');
          this.foundedEntites = data ;
        }
      }, error => {
        console.log('error mal9Ach les EntitesAdm.');
      }
    );
    return this.foundedEntites;
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

  public addEmployeToMagasin(codeEmploye: string, refMagasin: string) {
    this.http.put<number>(this.url + 'AddEmployeToMagasin/code/' + codeEmploye + '/refMagasin/' + refMagasin, this.loadedEntite).subscribe(
      data => {
        if (data > 0) {
          console.log('success employe added to this magasin');
          alert('success employe added to this magasin');
        } else {
          console.log('the reference of magasin or the code of employe is not valid');
          console.log('ha data li katrj3:    ' + data);
          alert('the reference of magasin or the code of employe is not valid');
        }
      }
    );
  }

  public removeEmployeFromMagasin(codeEmploye: string, refMagasin: string) {
    this.http.put<number>(this.url + 'RemoveEmployeFromMagasin/code/' + codeEmploye + '/refMagasin/' + refMagasin, this.loadedEntite).subscribe(
      data => {
        if (data > 0) {
          console.log('success employe removed');
          alert('success employe removed');
        } else {
          console.log('the reference of magasin or the code of employe is not valid');
          console.log('ha data li katrj3:    ' + data);
          alert('the reference of magasin or the code of employe is not valid');
        }
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
    clone.expressionBesoins = entite.expressionBesoins;
    return clone;
  }

  get loadedEntite(): EntiteAdministrative {
    if(this._loadedEntite == null) {
      this._loadedEntite = new EntiteAdministrative();
    }
    return this._loadedEntite;
  }

  set loadedEntite(value: EntiteAdministrative) {
    this._loadedEntite = value;
  }
}
