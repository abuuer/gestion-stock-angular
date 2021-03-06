import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";

import {TestObject} from "protractor/built/driverProviders";
import {EntiteAdministrative} from "../model/administration/entite-administrative.model";
import {ExpressionBesoinDetail} from "../model/administration/expression-besoin-detail.model";
import {Personnel} from "../model/administration/personnel.model";
import {ExpressionBesoin} from "../model/administration/expression-besoin.model";
import {Produit} from "../model/magasin/produit.model";

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  private _entiteAdministrative : EntiteAdministrative;
  private _expressionBesoin : ExpressionBesoin;
  private _expressionBesoins :  Array<ExpressionBesoin>;
  private _expressionBesoinDetail : ExpressionBesoinDetail;
  private _personnel : Personnel;
  private _personnels : Array<Personnel>;
  private _produit : Produit ;
  private _produits : Array<Produit> ;
  private _chef : Personnel ;
  private _chefs : Array<Personnel> ;
  private _entiteAdmins :  Array<EntiteAdministrative> ;
  private _foundedByReference = new ExpressionBesoin ;
  private _url = "http://localhost:8090/stock-api/ExpressionBesoin";

  constructor(private http: HttpClient) {
  }

  get foundedByReference(): ExpressionBesoin {
    return this._foundedByReference;
  }

  set foundedByReference(value: ExpressionBesoin) {
    this._foundedByReference = value;
  }

  public get entiteAdministrative(): EntiteAdministrative {
    if (this._entiteAdministrative == null) {
      this._entiteAdministrative = new EntiteAdministrative();
    }
    return this._entiteAdministrative;
  }
  public set entiteAdministrative(value: EntiteAdministrative) {
    this._entiteAdministrative = value;
  }

  public get expressionBesoin(): ExpressionBesoin {
    if (this._expressionBesoin == null) {
      this._expressionBesoin = new ExpressionBesoin();
    }
    return this._expressionBesoin;
  }
  public set expressionBesoin(value: ExpressionBesoin) {
    this._expressionBesoin = value;
  }

  public get expressionBesoinDetail(): ExpressionBesoinDetail {
    if (this._expressionBesoinDetail == null) {
      this._expressionBesoinDetail = new ExpressionBesoinDetail();
    }
    return this._expressionBesoinDetail;
  }
  public set expressionBesoinDetail(value: ExpressionBesoinDetail) {
    this._expressionBesoinDetail = value;
  }

  public get personnel(): Personnel {
    if (this._personnel == null) {
      this._personnel = new Personnel();
    }
    return this._personnel;
  }
  public set personnel(value: Personnel) {
    this._personnel = value;
  }

  public get produit(): Produit {
    if(this._produit == null){
      this._produit = new Produit();
    }
    return this._produit;
  }

  public set produit(value: Produit) {
    this._produit = value;
  }

  get produits(): Array<Produit> {
    if(this._produits == null){
      this._produits = new Array<Produit>();
    }
    return this._produits;
  }

  set produits(value: Array<Produit>) {
    this._produits = value;
  }

  get chef(): Personnel {
    if(this._chef == null){
      this._chef = new Personnel;
    }
    return this._chef;
  }

  set chef(value: Personnel) {
    this._chef = value;
  }

  get personnels(): Array<Personnel> {
    if(this._personnels == null){
      this._personnels = new Array<Personnel>();
    }
    return this._personnels;
  }

  set personnels(value: Array<Personnel>) {
    this._personnels = value;
  }

  get entiteAdmins(): Array<EntiteAdministrative> {
    if(this._entiteAdmins == null){
      this._entiteAdmins = new Array<EntiteAdministrative>();
    }
    return this._entiteAdmins;
  }

  set entiteAdmins(value: Array<EntiteAdministrative>) {
    this._entiteAdmins = value;
  }

  get chefs(): Array<Personnel> {
    if(this._chefs == null){
      this._chefs = new Array<Personnel>();
    }
    return this._chefs;
  }

  set chefs(value: Array<Personnel>) {
    this._chefs = value;
  }


  get expressionBesoins(): Array<ExpressionBesoin> {
    if(this._expressionBesoins == null){
      this._expressionBesoins = new Array<ExpressionBesoin>();
    }
    return this._expressionBesoins;
  }

  set expressionBesoins(value: Array<ExpressionBesoin>) {
    this._expressionBesoins = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  public findAllProduits(){
    this.http.get<Array<Produit>>("http://localhost:8090/produit-api/produit/").subscribe(
      data=>{
        this.produits = data ;
      },error => {
        console.log("findAllProduits FAILED");
      }
    )
  }
  public findAllEntite(){
    this.http.get<Array<EntiteAdministrative>>("http://localhost:8090/gestion-stock-v1/EntiteAdministrative/findAll").subscribe(
      data=>{
        this.entiteAdmins = data ;
      },error => {
        console.log("findAllEntite FAILED");
      }
    )
  }
  public findAllChef(){
    this.http.get<Array<Personnel>>( "http://localhost:8090/stock-api/Personnel/").subscribe(
      data=>{
        this.chefs = data ;
      }
    )
  }

  public deleteByReference(expressionBesion : ExpressionBesoin){
    this.http.get<number>(this.url + "/reference/"+expressionBesion.reference).subscribe(
      data=>{
        console.log(expressionBesion.reference + " is DELETED!");
      }
    )
  }

  public save() {
    this.http.post<number>(this.url + "/", this.expressionBesoin).subscribe(
      data=>{
        if(data > 0){
          this.expressionBesoin = null ;
          this.findAllExpressions();
        }
      },error => {
        console.log(error);
      })
    console.log(this.expressionBesoin);
  }

  addProd() {
    this.expressionBesoin.expressionBesoinDetails.push(this.cloneexp(this.expressionBesoinDetail));
    this.expressionBesoin.etat = "nl";
    console.log(this.expressionBesoin);
  }

  private cloneexp(expressionBesoinDetail: ExpressionBesoinDetail) : ExpressionBesoinDetail {
    let exp = new ExpressionBesoinDetail();
    exp.qte = expressionBesoinDetail.qte;
    exp.reference = expressionBesoinDetail.reference;
    exp.produit.reference = expressionBesoinDetail.produit.reference;
    console.log(exp);
    return exp ;
  }


  public findByChef(expressionBesoin : ExpressionBesoin){
    this.http.get<Array<ExpressionBesoin>>(this.url + "/codeEmp/" + expressionBesoin.chef.code).subscribe(
      data=>{
        this.expressionBesoins = data ;
      }
    )
  }
  public findBydateExpressionBesoin(expressionBesoin : ExpressionBesoin){
    this.http.get<Array<ExpressionBesoin>>(this.url + "/dateExpressionBesoin/" + expressionBesoin.dateExpressionBesoin).subscribe(
      data=>{
        this.expressionBesoins = data ;
      }
    )
  }
  public findAllExpressions(){
    this.http.get<Array<ExpressionBesoin>>(this.url + "/" ).subscribe(
      data=>{
        this.expressionBesoins = data ;
      }
    )
  }
  public findByReference(expressionBesoin : ExpressionBesoin){
    this.http.get<ExpressionBesoin>(this.url + "/reference/" + expressionBesoin.reference).subscribe(
      data=>{
        console.log(data);
        this.foundedByReference = data ;
      },error => {
        this.foundedByReference = null ;
      }
    )
  }
}
